import React, { Component } from 'react';
import Base from './base';
import { connect } from 'react-redux';
import DigitButton from './calculator/digitButton';
import ACTIONS from '../../redux/actions';

class Calculator extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Base>
                    <div className='calculator'>
                        <div className='output'>
                            <div className='last-output'>
                                {this.props.lastOperand} {this.props.operation}
                            </div>
                            <div className='current-output'>
                                {this.props.currentOperand}
                            </div>
                        </div>
                        <button className='button-ac'>AC</button>
                        <button onClick={this.props.delete_digit}>Del</button>
                        <button>÷</button>
                        <DigitButton digit={"7"}></DigitButton>
                        <DigitButton digit={"8"}></DigitButton>
                        <DigitButton digit={"9"}></DigitButton>
                        <button>×</button>
                        <DigitButton digit={"4"}></DigitButton>
                        <DigitButton digit={"5"}></DigitButton>
                        <DigitButton digit={"6"}></DigitButton>
                        <button>-</button>
                        <DigitButton digit={"1"}></DigitButton>
                        <DigitButton digit={"2"}></DigitButton>
                        <DigitButton digit={"3"}></DigitButton>
                        <button>+</button>
                        <DigitButton digit={"0"}></DigitButton>
                        <DigitButton digit={"."}></DigitButton>
                        <button className='button-equal'>=</button>
                    </div>
                </Base>
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state, props) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation
    }
};

const mapDispatchToProps = {
    delete_digit: () => {
        return {
            type: ACTIONS.DELETE_DIGIT,
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);