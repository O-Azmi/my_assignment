import styled, { css } from 'styled-components';
import { TableProps } from './Table.types';
import TableCell from './TableCell/TableCell';
import TableRow from './TableRow/TableRow'
import TableHeader from './TableHeader/TableHeader';
import TableFooter from './TableFooter/TableFooter'
const StyledTable = styled.table<{disabled?: boolean}>`
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `};
`;

export default function Table({ disabled }: TableProps) {
    return (
        <StyledTable disabled={disabled}>
            <TableRow>
            <TableHeader width={'200px'} height={'50px'} backgroundColor={'#949494'} border={'right'} text={'Skills'}/>
            <TableHeader width={'200px'} height={'50px'} backgroundColor={'#949494'} border={'left'} text={'Skills'}/>
            <TableHeader width={'200px'} height={'50px'} backgroundColor={'#949494'} border={'left'} text={'Skills'}/>
            </TableRow>
            <TableRow>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Row'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Row'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Row'} bold={'default'}/>
            </TableRow>
            <TableRow>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Row'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Row'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Row'} bold={'default'}/>
            </TableRow>
            <TableRow>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Row'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Row'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Row'} bold={'default'}/>
            </TableRow>
            <TableFooter width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Row'}/>
        </StyledTable>
    );
}
