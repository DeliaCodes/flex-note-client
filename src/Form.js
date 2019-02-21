import React, {Component} from 'react';
import RichTextEditor from 'react-rte';

class FormRTE extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.input.value === '' ?
                RichTextEditor.createEmptyValue() :
                RichTextEditor.createValueFromString(this.props.input.value, 'html')
        };
    }


    componentWillReceiveProps(nextProps) {    
      const isPristine = nextProps.meta.pristine; 

    if (nextProps.input.value && isPristine) {
      this.setState({
        value: this.RichTextEditor.createValueFromString(nextProps.input.value, "html")
      });
    }
      this.state.value.setContentFromString(nextProps.value, "html");
  }

    onChange(value) {
        const isTextChanged = this.state.value.toString('html') !== value.toString('html');
        this.setState({value}, e => isTextChanged && this.props.input.onChange(value.toString('html')));
    };

    render() {
        return (
            <RichTextEditor value={this.state.value} onChange={this.onChange.bind(this)} />
        );
    }
}

export default FormRTE;