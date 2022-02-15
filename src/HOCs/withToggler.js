import React, {Component} from "react"

class Toggler extends Component {
    state = {
        on: this.props.defaultOnValue
    }
    
    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        });
    }
    
    render() {
        const {component: CreatedComponent, defaultOnValue, ...props} = this.props;
        return (
            <CreatedComponent on={this.state.on} toggle={this.toggle} {...props} />
        )
    }
}

export function withToggler(component, optionsObj) {
    return function(props) {
        return (
            <Toggler component={component} defaultOnValue={optionsObj.defaultOnValue} {...props}/>
        )
    }
}
