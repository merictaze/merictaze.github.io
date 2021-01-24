import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import Disqus from '../Disqus/Disqus'
import Author from '../Author'
import './style.scss'

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const tags = post.fields.tagSlugs

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">
          All Articles
        </Link>
      </div>
    )

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    const commentsBlock = (
      <div>
        <h2>Comments</h2>

        <form method="POST" action="https://mrc-blog-comment.herokuapp.com/v2/entry/merictaze/merictaze.github.io/source/comments">
          <input name="options[redirect]" type="hidden" value="https://merictaze.com" />
          <input name="options[slug]" type="hidden" value="{{ page.slug }}" />
            <label><input name="fields[name]" type="text"/>Name or Email</label>
            <label><textarea name="fields[message]"></textarea>Message</label>

              <button type="submit">Go!</button>
        </form>

        <p>No comments yet.</p>
      </div>
    );

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>

            <div className="post-single__author">
              <Author author={author} publishDate={post.frontmatter.date} />
            </div>

            <div className="post-single__body">
              <h2>Table Of Contents</h2>
              <div
                className="post-toc"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
              />
            </div>
            <hr/>
            <div
              className="post-single__body"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            {/*<div className="post-single__date">*/}
              {/*<em>*/}
                {/*Published {moment(post.frontmatter.date).format('D MMM YYYY')}*/}
              {/*</em>*/}
            {/*</div>*/}
          </div>
          <div className="post-single__footer">
            {tagsBlock}
            <hr />
            <p className="post-single__footer-text">
              {/*<strong>{author.name}</strong>*/}
              {/*&nbsp;&mdash;*/}
              {/*{subtitle}*/}
              {/*<a*/}
                {/*href={`https://twitter.com/${author.twitter}`}*/}
                {/*target="_blank"*/}
                {/*rel="noopener noreferrer"*/}
              {/*>*/}
                {/*<br /> <strong>{author.name}</strong> on Twitter*/}
              {/*</a>*/}
            </p>
            {/*{commentsBlock}*/}
          </div>
        </div>
      </div>
    )
  }
}

export default PostTemplateDetails
