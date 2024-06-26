import { clsx } from 'clsx';
import Link from 'next/link';

interface Breadcrumb {
    label: string;
    href: string;
    active?: boolean;
}

export default function Breadcrumbs({
                                        breadcrumbs,
                                    }: {
    breadcrumbs: Breadcrumb[];
}) {
    return (
        <div className="px-5 py-3">
            <nav
                aria-label="Breadcrumb"
                className="mb-6 block border-b border-greenCustom-400 pb-1"
            >
                <ol className={clsx('flex text-xl md:text-2xl')}>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <li
                            key={breadcrumb.href}
                            aria-current={breadcrumb.active}
                            className={clsx(
                                breadcrumb.active ? 'text-greenCustom-600' : 'text-gray-500',
                            )}
                        >
                            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                            {index < breadcrumbs.length - 1 ? (
                                <span className="mx-3 inline-block">/</span>
                            ) : null}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}