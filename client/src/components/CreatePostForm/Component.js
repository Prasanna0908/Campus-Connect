import React from 'react';
import { Field } from 'redux-form';
import categories from '../../categories';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Label from '../shared/form/Label';
import Chips, { Chip } from 'react-chips';

const postTypes = [
  {
    label: 'link',
    value: 'link'
  },
  {
    label: 'text',
    value: 'text'
  },
  {
    label: 'poll',
    value: 'poll'
  }
];

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '', chips: [] };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { token, post, history } = this.props;
    if (!token) history.push('/');
    if (post) history.push(`/Vesit/${post.category}/${post.id}`);
  }

  onSubmit = post => this.props.attemptCreatePost(post, this.state.markdown,this.state.chips);
  // onSubmit = (post) => console.log(post, this.state.markdown);

  onChange = chips => {
    this.setState({ chips });
  };
  mapCategories = () =>
    categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));

  render() {
    return (
      <Form
        loading={this.props.isFetching}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        wide
      >
        <Field
          name='type'
          label='type'
          type='radiogroup'
          component={renderField}
          options={postTypes}
        />
        <Field
          name='category'
          label='category'
          type='select'
          component={renderField}
        >
          {this.mapCategories()}
        </Field>
        <Field name='title' label='title' type='text' component={renderField} />
        {this.props.form.values.type === 'link' && (
          <Field name='url' label='url' type='url' component={renderField} />
        )}
        {this.props.form.values.type === 'text' && (
          <div>
            {/* <Field
            name='text'
            label='text'
            type='textarea'
            component={renderField}
          /> */}

            <CKEditor
              editor={ClassicEditor}
              // data="<p>Hello from CKEditor 5!</p>"
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                let data = editor.getData();
                this.setState({ markdown: data });
                console.log(this.state.markdown);
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                //console.log( 'Blur.', editor );
              }}
              onFocus={(event, editor) => {
                // console.log( 'Focus.', editor );
              }}
            />
          </div>
        )}
        {this.props.form.values.type === 'poll' && (
          <div style={{ width: '100%' }}>
            
            <Chips
              value={this.state.chips}
              onChange={this.onChange}
              placeholder={'Create Answers for your Poll Seperated by Comma'}
            />
          </div>
        )}

        <SubmitButton type='submit'>create post</SubmitButton>
      </Form>
    );
  }
}

export default CreatePostForm;
