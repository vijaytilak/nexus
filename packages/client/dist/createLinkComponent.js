import React from 'react';
import { createLink } from '@lowdefy/engine';
import { type } from '@lowdefy/helpers';
const createLinkComponent = (lowdefy, Link)=>{
    const { window } = lowdefy._internal.globals;
    const backLink = ({ ariaLabel, children, className, id, onClick = ()=>{}, rel })=>/*#__PURE__*/ React.createElement("a", {
            id: id,
            className: className,
            rel: rel,
            "aria-label": ariaLabel ?? 'back',
            onClick: (...params)=>{
                lowdefy._internal.router.back();
                onClick(...params);
            }
        }, type.isFunction(children) ? children(id) : children);
    const newOriginLink = ({ ariaLabel, children, className, href, id, onClick = ()=>{}, newTab, pageId, query, rel, url })=>{
        return /*#__PURE__*/ React.createElement("a", {
            id: id,
            "aria-label": ariaLabel,
            className: className,
            href: href ?? `${url}${query ? `?${query}` : ''}`,
            rel: rel ?? (newTab && 'noopener noreferrer'),
            target: newTab && '_blank',
            onClick: async (...params)=>{
                await onClick(...params);
                return true;
            }
        }, type.isFunction(children) ? children(pageId ?? url ?? id) : children);
    };
    const sameOriginLink = ({ ariaLabel, children, className, id, newTab, onClick = ()=>{}, pageId, pathname, query, rel, replace, scroll, setInput, url })=>{
        if (newTab) {
            return(// eslint-disable-next-line react/jsx-no-target-blank
            /*#__PURE__*/ React.createElement("a", {
                id: id,
                "aria-label": ariaLabel,
                className: className,
                href: `${window.location.origin}${lowdefy.basePath}${pathname}${query ? `?${query}` : ''}`,
                rel: rel ?? 'noopener noreferrer',
                target: "_blank",
                onClick: async (...params)=>{
                    await onClick(...params);
                    return true;
                }
            }, type.isFunction(children) ? children(pageId ?? url ?? id) : children));
        }
        return(// This code can be made simpler.
        /*#__PURE__*/ React.createElement(Link, {
            href: {
                pathname,
                query
            },
            replace: replace,
            scroll: scroll,
            id: id,
            "aria-label": ariaLabel,
            className: className,
            rel: rel,
            onClick: (...params)=>{
                setInput();
                onClick(...params);
            }
        }, type.isFunction(children) ? children(pageId ?? url ?? id) : children));
    };
    const noLink = ({ className, children, id, onClick = ()=>{} })=>/*#__PURE__*/ React.createElement("span", {
            id: id,
            className: className,
            onClick: onClick
        }, type.isFunction(children) ? children(id) : children);
    return createLink({
        backLink,
        lowdefy,
        newOriginLink,
        sameOriginLink,
        noLink,
        disabledLink: noLink
    });
};
export default createLinkComponent;
