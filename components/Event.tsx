import Link from 'next/link';

export default function Event({event}) {
    return (
        <div className="card mb-3" style={{width: '18rem'}}>
            <div className="card-body">
                <Link href={`/events/${event.slug}`}>
                    <a>
                        <h5 className="card-title">{event.title.rendered}</h5>
                    </a>
                </Link>
                <p className="card-text">
                    <small className="text-muted">{event.acf.date}</small>
                </p>
                <Link href={`/events/${event.slug}`}>
                    <a className="btn btn-primary">See more</a>
                </Link>
            </div>
        </div>
    );
}
