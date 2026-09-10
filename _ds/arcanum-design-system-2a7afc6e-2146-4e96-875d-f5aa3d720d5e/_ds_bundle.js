/* @ds-bundle: {"format":4,"namespace":"ArcanumDesignSystem_2a7afc","components":[{"name":"CodexCard","sourcePath":"components/content/CodexCard.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"PlateHead","sourcePath":"components/content/PlateHead.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Crescent","sourcePath":"components/core/Crescent.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Frame","sourcePath":"components/core/Frame.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Sparkle","sourcePath":"components/core/Sparkle.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ChapterDots","sourcePath":"components/navigation/ChapterDots.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"}],"sourceHashes":{"components/content/CodexCard.jsx":"e2738529f03e","components/content/Eyebrow.jsx":"461f3b87d35a","components/content/PlateHead.jsx":"726e64b1a100","components/core/Button.jsx":"a794f05fe7f0","components/core/Crescent.jsx":"4fb477eb1fcd","components/core/Divider.jsx":"428bf1bcff64","components/core/Frame.jsx":"70fce949d20b","components/core/Input.jsx":"f8879a89156e","components/core/Sparkle.jsx":"687255457ed7","components/core/Tag.jsx":"ba344d7836c5","components/navigation/ChapterDots.jsx":"4554f0e9dea9","components/navigation/NavBar.jsx":"aa0d580e4a99","components/navigation/NavLink.jsx":"4d8d6dae2004"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArcanumDesignSystem_2a7afc = window.ArcanumDesignSystem_2a7afc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      display: 'inline-block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/PlateHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PlateHead({
  numeral,
  arcana,
  rules,
  title,
  intro,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 40,
      marginBottom: 'var(--space-section)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14
    }
  }, numeral && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 13px/1 var(--font-mono)',
      color: 'var(--gold)',
      border: '1px solid var(--line-strong)',
      width: 34,
      height: 34,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, numeral), (arcana || rules) && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, arcana && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: 'var(--gold-bright)',
      fontSize: 15,
      display: 'block'
    }
  }, arcana), rules && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--ash-dim)'
    }
  }, rules))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 34,
      marginBottom: 14
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure-body)',
      color: 'var(--ash)',
      fontSize: 15.5,
      lineHeight: 1.6
    }
  }, intro)));
}
Object.assign(__ds_scope, { PlateHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PlateHead.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  font: 'var(--fw-semibold) 14px/1.2 var(--font-body)',
  letterSpacing: 'var(--ls-tight)',
  padding: '12px 22px',
  border: '1px solid var(--gold)',
  borderRadius: 'var(--radius-none)',
  cursor: 'pointer',
  transition: 'transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast), color var(--transition-fast)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-inline)'
};
const VARIANTS = {
  primary: {
    rest: {
      background: 'var(--action-primary-bg)',
      color: 'var(--action-primary-fg)'
    },
    hover: {
      background: 'var(--action-primary-bg-hover)',
      borderColor: 'var(--gold-bright)',
      boxShadow: 'var(--glow-ring-gold)',
      transform: 'var(--lift-button)'
    }
  },
  secondary: {
    rest: {
      background: 'transparent',
      color: 'var(--action-secondary-fg)'
    },
    hover: {
      background: 'var(--action-secondary-bg-hover)',
      boxShadow: 'var(--glow-ring-quiet)',
      transform: 'var(--lift-button)'
    }
  },
  danger: {
    rest: {
      background: 'var(--action-danger-bg)',
      borderColor: 'var(--oxblood)',
      color: 'var(--action-danger-fg)'
    },
    hover: {
      background: 'var(--action-danger-bg-hover)',
      borderColor: 'var(--oxblood-bright)'
    }
  }
};
function Button({
  variant = 'primary',
  disabled = false,
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const composed = {
    ...BASE,
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(disabled ? {
      opacity: 0.35,
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none'
    } : null),
    ...style
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true),
    onBlur: () => setHover(false),
    style: composed
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Crescent.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Crescent({
  size = 34,
  color = 'var(--gold)',
  ground = 'var(--ink)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-round)',
      background: color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: size * 0.265,
      width: size,
      height: size,
      borderRadius: 'var(--radius-round)',
      background: ground
    }
  }));
}
Object.assign(__ds_scope, { Crescent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Crescent.jsx", error: String((e && e.message) || e) }); }

// components/core/Frame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CORNERS = {
  tl: {
    top: -1,
    left: -1,
    borderTop: '1px solid',
    borderLeft: '1px solid'
  },
  tr: {
    top: -1,
    right: -1,
    borderTop: '1px solid',
    borderRight: '1px solid'
  },
  bl: {
    bottom: -1,
    left: -1,
    borderBottom: '1px solid',
    borderLeft: '1px solid'
  },
  br: {
    bottom: -1,
    right: -1,
    borderBottom: '1px solid',
    borderRight: '1px solid'
  }
};
function Frame({
  length = 14,
  color = 'var(--gold)',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      ...style
    }
  }, rest), children, Object.keys(CORNERS).map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: length,
      height: length,
      pointerEvents: 'none',
      borderColor: color,
      opacity: 0.85,
      ...CORNERS[k]
    }
  })));
}
Object.assign(__ds_scope, { Frame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Frame.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? 'arc-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-inline)',
      maxWidth: 280,
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'var(--surface-field)',
      border: '1px solid ' + (focus ? 'var(--gold)' : 'var(--line-strong)'),
      borderRadius: 'var(--radius-none)',
      color: 'var(--parchment)',
      font: 'var(--fw-regular) 14px/1.4 var(--font-body)',
      padding: '11px 12px',
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Sparkle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 14,
  md: 20,
  lg: 28
};
function Sparkle({
  size = 'sm',
  color = 'var(--gold)',
  style,
  ...rest
}) {
  const px = typeof size === 'number' ? size : SIZES[size] || SIZES.sm;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: px,
    height: px,
    "aria-hidden": "true",
    style: {
      color,
      flex: 'none',
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M12 0 L14.3 9.7 L24 12 L14.3 14.3 L12 24 L9.7 14.3 L0 12 L9.7 9.7 Z"
  }));
}
Object.assign(__ds_scope, { Sparkle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Sparkle.jsx", error: String((e && e.message) || e) }); }

// components/content/CodexCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CodexCard({
  numeral,
  title,
  role,
  art,
  width = 220,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: '1px solid ' + (hover ? 'var(--gold)' : 'var(--line-strong)'),
      borderRadius: 'var(--radius-none)',
      padding: 'var(--space-comfortable)',
      width,
      background: 'var(--surface-plate)',
      transform: hover ? 'var(--lift-card)' : 'none',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'none',
      transition: 'transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-fast)',
      position: 'relative',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), numeral && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) 11px/1 var(--font-mono)',
      color: 'var(--gold)',
      textAlign: 'center',
      letterSpacing: '.15em'
    }
  }, numeral), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 96,
      marginBlock: 14,
      border: '1px solid var(--line)',
      background: art ? 'var(--ink)' : 'var(--wash-plate-art)',
      backgroundImage: art ? 'url(' + art + ')' : 'var(--wash-plate-art)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !art && /*#__PURE__*/React.createElement(__ds_scope.Sparkle, {
    size: "md"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h3)',
      textAlign: 'center',
      lineHeight: 'var(--lh-h3)'
    }
  }, title), role && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) 10.5px/1.4 var(--font-mono)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ash-dim)',
      textAlign: 'center',
      marginTop: 6
    }
  }, role));
}
Object.assign(__ds_scope, { CodexCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CodexCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const rule = extra => ({
  flex: '1 1 auto',
  height: 1,
  background: 'var(--rule-fade)',
  ...extra
});
function Divider({
  ornament = 'star',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: 'var(--gold)',
      ...style
    }
  }, rest), ornament === 'plain' && /*#__PURE__*/React.createElement("span", {
    style: rule()
  }), ornament === 'star' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: rule()
  }), /*#__PURE__*/React.createElement(__ds_scope.Sparkle, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: rule()
  })), ornament === 'full' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: rule()
  }), /*#__PURE__*/React.createElement(__ds_scope.Sparkle, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: rule({
      maxWidth: 60
    })
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      border: '1px solid var(--gold)',
      transform: 'rotate(45deg)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: rule({
      maxWidth: 60
    })
  }), /*#__PURE__*/React.createElement(__ds_scope.Sparkle, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: rule()
  })));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      border: '1px solid var(--line-strong)',
      borderRadius: 'var(--radius-none)',
      padding: '6px 12px',
      display: 'inline-block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ChapterDots.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChapterDots({
  count = 4,
  active = 0,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      ...style
    }
  }, rest), Array.from({
    length: count
  }, (_, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      role: onSelect ? 'button' : undefined,
      tabIndex: onSelect ? 0 : undefined,
      onClick: onSelect ? () => onSelect(i) : undefined,
      style: {
        width: 6,
        height: 6,
        borderRadius: 'var(--radius-round)',
        background: on ? 'var(--gold)' : 'var(--ash-dim)',
        boxShadow: on ? 'var(--shadow-dot)' : 'none',
        cursor: onSelect ? 'pointer' : 'default',
        transition: 'background var(--transition-fast), box-shadow var(--transition-fast)',
        flex: 'none'
      }
    });
  }));
}
Object.assign(__ds_scope, { ChapterDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ChapterDots.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  mark = 'Arcanum',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--scrim-nav)',
      backdropFilter: 'blur(var(--blur-nav))',
      borderBottom: '1px solid var(--line)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-w)',
      marginInline: 'auto',
      paddingInline: 'var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-comfortable)',
      paddingBlock: 'var(--space-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) 20px/1.2 var(--font-display)',
      fontStyle: 'italic',
      color: 'var(--parchment)',
      letterSpacing: '.02em',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-inline)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Sparkle, {
    size: "sm"
  }), mark), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-loose)',
      alignItems: 'center',
      overflowX: 'auto',
      scrollbarWidth: 'none'
    }
  }, children)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavLink({
  numeral,
  active = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lit = hover || active;
  return /*#__PURE__*/React.createElement("a", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true),
    onBlur: () => setHover(false),
    style: {
      font: 'var(--fw-regular) 12px/1.4 var(--font-mono)',
      letterSpacing: 'var(--ls-mono)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      color: lit ? 'var(--gold-bright)' : 'var(--ash)',
      paddingBlock: 'var(--space-hairline)',
      borderBottom: '1px solid ' + (lit ? 'var(--gold-dim)' : 'transparent'),
      transition: 'color var(--transition-fast), border-color var(--transition-fast)',
      ...style
    }
  }, rest), numeral && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)',
      marginRight: 6
    }
  }, numeral), children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CodexCard = __ds_scope.CodexCard;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.PlateHead = __ds_scope.PlateHead;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Crescent = __ds_scope.Crescent;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Frame = __ds_scope.Frame;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Sparkle = __ds_scope.Sparkle;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ChapterDots = __ds_scope.ChapterDots;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.NavLink = __ds_scope.NavLink;

})();
