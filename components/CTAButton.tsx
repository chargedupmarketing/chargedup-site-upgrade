import Link from 'next/link';
export function CTAButton({
  href = '/contact',
  children = 'Book a Strategy Call',
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={href} className="btn-primary">
      {children}
    </Link>
  );
}
