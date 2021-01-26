import React from 'react'
import moment from 'moment';
import { Link } from 'gatsby'
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
            <CommentComponent slug={post.fields.slug} comments={this.props.data.allCommentsYaml.nodes} />
          </div>
        </div>
      </div>
    )
  }
}

class CommentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        message: '',
        slug: this.props.slug,
      },
      submitted: 0,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [target.name]: target.value,
      },
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const data = new URLSearchParams();
    data.append('fields[name]', this.state.form.name);
    data.append('fields[message]', this.state.form.message);
    data.append('fields[slug]', this.state.form.slug);
    data.append('options[slug]', this.state.form.slug);

    this.setState({submitted: 2});
    fetch('https://mrc-blog-comment.herokuapp.com/v2/entry/merictaze/merictaze.github.io/source/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
    })
    .then((response) => response.json())
    .then((response) => {this.setState({submitted: response.success ? 1 : -1})})
    .catch((error) => {this.setState({submitted: -1})});
  }

  render() {
    return (
      <div>
        <h2>Comments</h2>

        {this.state.submitted === 1 &&
          <div className="alert-success">Comment has been submitted, it will show up here after the review.</div>}

        {this.state.submitted === -1 &&
          <div className="alert-failure">Failed to submit the comment, please try again later</div>}

        <form onSubmit={this.handleSubmit} style={{marginBottom: 50}}>
          <label>
            Name or Email
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </label>

          <label>
            Message
            <textarea rows={4} name="message" value={this.state.message} onChange={this.handleChange}></textarea>
          </label>

          <div>
            <input type="submit" value="Submit" disabled={this.state.submitted === 2}/>
          </div>
        </form>


        {this.props.comments && this.props.comments.map(comment => (
          <div style={{marginTop: 20}} key={comment.id}>
            <div style={{display: 'flex', flex: 1}}>
              <div style={{alignSelf: 'center'}} data-letters={comment.name.charAt(0).toUpperCase()}></div>
              <div>
                <div>{comment.name}</div>
                <div><em><small>{moment(comment.date).format('D MMM YYYY')}</small></em></div>
              </div>
            </div>
            <p style={{marginRight: '3.5em'}}>
              {comment.message}
            </p>
          </div>
        ))}

        {(!this.props.comments || this.props.comments.length === 0) && <p>No comments yet.</p>}
      </div>
    );
  }
}

export default PostTemplateDetails
