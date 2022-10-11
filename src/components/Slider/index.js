import styled from 'styled-components';
import ReactSlider from 'react-slider'

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
`;

const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #D446F1;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
    outline: none;
`;

const Thumb = (props, state) => <StyledThumb {...props}></StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => props.index === 0 ? "#D446F1" :"#181546"};
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;


const Slider = () => {
return <StyledSlider defaultValue={36} renderTrack={Track} renderThumb={Thumb} />;

}

export default Slider