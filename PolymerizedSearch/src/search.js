import React from "react";
import {
    compose,
    setDisplayName,
    withHandlers,
    withState,
    lifecycle
} from "recompose";
import style from "./style.less";
import search from '../static/search.png';
let timer = null;
export default compose(
    setDisplayName(__filename),
    withState("innerValue", "setInnerValue"),
    withHandlers(() => {
        let treeRef;
        return {
            registerRef: () => (ref) => {
                treeRef = ref;
            },
            getRef: () => () => treeRef,
        };
    }),
    withHandlers({
        onChange: ({ setInnerValue, onChange }) => e => {
            let value = e.target.value;
            setInnerValue(value);
            clearTimeout(timer);
            if (onChange) {
                timer = setTimeout(() => {
                    onChange(value);
                }, 450)
            }
        },
        onKeyUp: ({ onSearch, innerValue }) => e => {
            if (e.keyCode === 13) {
                onSearch(innerValue);
            }
        },
        onSearch: ({ onSearch, innerValue }) => () => {
            onSearch(innerValue);
        }
    }),
    lifecycle({
        componentDidMount() {
            this.props.getRef().focus();
            this.props.setInnerValue(this.props.value);
        },
        componentWillReceiveProps(nextProps) {
            if (nextProps["value"] != this.props.value) {
                this.props.setInnerValue(nextProps["value"]);
            }
        }
    })
)
    (({
        className,
        innerValue,
        onChange,
        onKeyUp,
        onSearch,
        registerRef,
    }) => (
            <div className={`${style.SearchWrap} ${className}`}>
                <input
                    className={style.Search}
                    // value={innerValue} //原始用法或将出错
                    defaultValue={innerValue}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    ref={registerRef}
                />
                <img src={search} onClick={onSearch} alt="" className={style.SearchButton} />
            </div>
        )
    );
