import Link from 'next/link';
import { getDate } from '../utils/utils';

export default function Post({ post }) {
  return (
    <div className='card mb-3' style={{ maxWidth: '540px' }}>
      <div className='row g-0'>
        <div className='col-md-4'></div>
        <div className='col-md-8'>
          <div className='card-body'>
            <Link href={`/posts/${post.slug}`}>
              <a>
                <h5 className='card-title'>{post.title.rendered}</h5>
              </a>
            </Link>
            <div
              className='card-text'
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <p className='card-text'>
              <small className='text-muted'>On {getDate(post.modified)}</small>
            </p>
            <Link href={`/posts/${post.slug}`}>
              <a className='btn btn-primary'>See more</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
