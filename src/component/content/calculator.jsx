import React, { Component } from 'react';
import Base from './base';
import { connect } from 'react-redux';
import DigitButton from './calculator/digitButton';
import OperationButton from './calculator/operationButton';
import ACTIONS from '../../redux/actions';

class Calculator extends Component {
    state = {
        formater: Intl.NumberFormat('en-us')
    }; 

    format = number => {
        const [intger, decimal] = number.split('.');
        if (decimal === undefined) {
            return this.state.formater.format(intger);
        }
        return `${this.state.formater.format(intger)}.${decimal}`;
    };

    render() { 
        return (
            <React.Fragment>
                <Base>
                    <div className='calculator'>
                        <div className='output'>
                            <div className='last-output'>
                                {this.format(this.props.lastOperand)} {this.props.operation}
                            </div>
                            <div className='current-output'>
                                {this.format(this.props.currentOperand)}
                            </div>
                        </div>
                        <button className='button-ac' onClick={this.props.clear}>AC</button>
                        <button onClick={this.props.delete_digit}>Del</button>
                        <OperationButton operation={"÷"}></OperationButton>
                        <DigitButton digit={"7"}></DigitButton>
                        <DigitButton digit={"8"}></DigitButton>
                        <DigitButton digit={"9"}></DigitButton>
                        <OperationButton operation={"×"}></OperationButton>
                        <DigitButton digit={"4"}></DigitButton>
                        <DigitButton digit={"5"}></DigitButton>
                        <DigitButton digit={"6"}></DigitButton>
                        <OperationButton operation={"-"}></OperationButton>
                        <DigitButton digit={"1"}></DigitButton>
                        <DigitButton digit={"2"}></DigitButton>
                        <DigitButton digit={"3"}></DigitButton>
                        <OperationButton operation={"+"}></OperationButton>
                        <DigitButton digit={"0"}></DigitButton>
                        <DigitButton digit={"."}></DigitButton>
                        <button onClick={this.props.evaluate} className='button-equal'>=</button>
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
    },

    clear: () => {
        return {
            type: ACTIONS.CLEAR,
        }
    },

    evaluate: () => {
        return {
            type: ACTIONS.EVALUATE,
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);