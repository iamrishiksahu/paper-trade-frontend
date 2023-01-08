import React, { useEffect, useRef, useState } from 'react';

let tvScriptLoadingPromise;

const ChartFragment = (props) => {

    const onLoadScriptRef = useRef();

    const config = {
        exhange: props.exchange,
        symbol: props.symbol,
       
    }


    useEffect(() => {
        onLoadScriptRef.current = createWidget;

        console.log(`chart1: ${props.symbol}`)


        if (!tvScriptLoadingPromise) {
            tvScriptLoadingPromise = new Promise((resolve) => {
                const script = document.createElement('script');
                script.id = 'tradingview-widget-loading-script';
                script.src = 'https://s3.tradingview.com/tv.js';
                script.type = 'text/javascript';
                script.onload = resolve;

                document.head.appendChild(script);
            });
        }

        tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

        return () => onLoadScriptRef.current = null;

        function createWidget() {

            console.log(`chart1: ${config.symbol}`)

            if (document.getElementById('tradingview_6628f') && 'TradingView' in window) {
                console.log(`chart2: ${props.symbol}`)

                new window.TradingView.widget({
                    width: "100%",
                    height: "100%",
                    symbol: `BSE:${props.symbol}`,
                    interval: "D",
                    timezone: "Asia/Kolkata",
                    theme: "light",
                    style: "1",
                    locale: "in",
                    toolbar_bg: "#f1f3f6",
                    withdateranges: true,
                    hide_side_toolbar: false,
                    enable_publishing: false,
                    allow_symbol_change: true,
                    container_id: "tradingview_6628f"
                });
            }
        }
    },[props]);

    return (
        <div className='tradingview-widget-container'>

          <div id='tradingview_6628f' />      
        </div>

    );
}

export default ChartFragment;
