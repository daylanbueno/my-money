import React, {Component} from 'react'
import Grid from '../common/layout/grid'


export default class CreditList extends Component {

    rendRows() {
        return (
            <tr>
                <td>Field</td>
            </tr>
        )
    }

    render() {
        return(
            <div>
                <Grid cols={this.props.cols}>
                    <fieldset>
                        <legend>Créditos</legend>
                        <table className='table'>
                         <thead>
                             <th>Nome</th>
                             <th>Valor</th>
                             <th>Acões</th>
                         </thead>
                         <tbody>
                             {this.rendRows()}
                         </tbody>
                        </table>
                    </fieldset>
                </Grid>
            </div>
        )
    }
}
