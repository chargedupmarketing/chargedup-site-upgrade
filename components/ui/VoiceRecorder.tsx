'use client';

import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Square, Loader2 } from 'lucide-react';

interface VoiceRecorderProps {
  onTranscription: (text: string) => void;
  isRecording: boolean;
  onRecordingChange: (recording: boolean) => void;
  className?: string;
}

export default function VoiceRecorder({
  onTranscription,
  isRecording,
  onRecordingChange,
  className = '',
}: VoiceRecorderProps) {
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRecording) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => stopTimer();
  }, [isRecording]);

  const startTimer = () => {
    setRecordingTime(0);
    timerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/wav',
        });
        await transcribeAudio(audioBlob);

        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      onRecordingChange(true);
    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Unable to access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      onRecordingChange(false);
    }
  };

  const transcribeAudio = async (audioBlob: Blob) => {
    setIsTranscribing(true);

    try {
      // Convert blob to base64 for API
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Audio = (reader.result as string).split(',')[1];

        // Call transcription API (you can replace this with your preferred service)
        const transcription = await callTranscriptionAPI(base64Audio);

        if (transcription) {
          onTranscription(transcription);
        }

        setIsTranscribing(false);
      };
      reader.readAsDataURL(audioBlob);
    } catch (error) {
      console.error('Transcription error:', error);
      alert('Error transcribing audio. Please try again.');
      setIsTranscribing(false);
    }
  };

  const callTranscriptionAPI = async (base64Audio: string): Promise<string> => {
    try {
      // For now, we'll simulate transcription
      // In production, you'd call a real transcription service like:
      // - OpenAI Whisper API
      // - Google Speech-to-Text
      // - Azure Speech Services
      // - AssemblyAI

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // For demo purposes, return a placeholder
      // Replace this with actual API call
      return 'This is a simulated transcription. In production, this would be the actual transcribed text from your voice recording.';

      // Example of real API call:
      /*
      const response = await fetch('/api/transcribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ audio: base64Audio })
      })
      
      const data = await response.json()
      return data.transcription
      */
    } catch (error) {
      console.error('API call error:', error);
      throw error;
    }
  };

  const handleClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={handleClick}
        disabled={isTranscribing}
        className={`relative p-3 rounded-full transition-all duration-200 ${
          isRecording
            ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        } ${isTranscribing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        title={isRecording ? 'Stop recording' : 'Start voice recording'}
      >
        {isTranscribing ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : isRecording ? (
          <Square className="w-5 h-5" />
        ) : (
          <Mic className="w-5 h-5" />
        )}
      </button>

      {isRecording && (
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span>Recording {formatTime(recordingTime)}</span>
        </div>
      )}

      {isTranscribing && (
        <div className="flex items-center space-x-2 text-sm text-blue-400">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Transcribing...</span>
        </div>
      )}
    </div>
  );
}
