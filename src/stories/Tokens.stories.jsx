import React from 'react';
import * as tokens from '../tokens/tokens';

export default {
  title: 'Design Tokens',
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
};

const ColorSwatch = ({ label, value }) => (
  <div className="token-card">
    <strong>{label}</strong>
    <div className="token-swatch" style={{ background: typeof value === 'string' ? value : 'transparent' }} />
    <p className="token-label">{typeof value === 'string' ? value : String(value)}</p>
  </div>
);

const TypographyRow = ({ label, item }) => (
  <div className="token-card">
    <strong>{label}</strong>
    <p style={{
      margin: 0,
      fontFamily: item.fontFamily,
      fontSize: item.fontSize,
      fontWeight: item.fontWeight,
      lineHeight: item.lineHeight,
      letterSpacing: item.letterSpacing
    }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p className="token-label">{item.fontSize} / {item.lineHeight} / {item.fontWeight}</p>
  </div>
);

const neutralKeys = ['50','100','200','300','400','500','600','700','800','850','900','920','940','950','960','970','980','990','1000'];

export const ColorPrimitives = () => (
  <div className="token-grid">
    {neutralKeys.map((key) => (
      <ColorSwatch
        key={key}
        label={`neutral ${key}`}
        value={tokens[`ColorPrimitiveNeutral${key}`]}
      />
    ))}
  </div>
);

export const BrandColors = () => (
  <div className="token-grid">
    <ColorSwatch label="VoltFunded Primary" value={tokens.ColorBrandVoltfundedPrimary} />
    <ColorSwatch label="InstantFunding Primary" value={tokens.ColorBrandInstantfundingPrimary} />
  </div>
);

export const SemanticColors = () => (
  <div className="token-grid">
    <ColorSwatch label="Brand Primary" value="var(--color-brand-primary)" />
    <ColorSwatch label="Brand On Primary" value="var(--color-brand-on-primary)" />
    <ColorSwatch label="Background Page" value="var(--color-background-page)" />
    <ColorSwatch label="Background Surface" value="var(--color-background-surface)" />
    <ColorSwatch label="Text Primary" value="var(--color-text-primary)" />
    <ColorSwatch label="Text Secondary" value="var(--color-text-secondary)" />
  </div>
);

export const SpaceScale = () => (
  <div className="token-grid">
    {[
      { key: '0', value: tokens.Space0 },
      { key: '1', value: tokens.Space1 },
      { key: '2', value: tokens.Space2 },
      { key: '3', value: tokens.Space3 },
      { key: '4', value: tokens.Space4 },
      { key: '8', value: tokens.Space8 }
    ].map((token) => (
      <div key={token.key} className="token-card">
        <strong>space {token.key}</strong>
        <div className="token-swatch" style={{ height: token.value, background: '#e2e8f0' }} />
        <p className="token-label">{token.value}</p>
      </div>
    ))}
  </div>
);

export const TypographyScale = () => (
  <div className="token-grid">
    <TypographyRow label="Heading LG" item={{
      fontFamily: tokens.TypographyHeadingLgFontFamily,
      fontSize: tokens.TypographyHeadingLgFontSize,
      fontWeight: tokens.TypographyHeadingLgFontWeight,
      lineHeight: tokens.TypographyHeadingLgLineHeight,
      letterSpacing: tokens.TypographyHeadingLgLetterSpacing
    }} />
    <TypographyRow label="Body MD" item={{
      fontFamily: tokens.TypographyBodyMdFontFamily,
      fontSize: tokens.TypographyBodyMdFontSize,
      fontWeight: tokens.TypographyBodyMdFontWeight,
      lineHeight: tokens.TypographyBodyMdLineHeight,
      letterSpacing: tokens.TypographyBodyMdLetterSpacing
    }} />
    <TypographyRow label="Body MD Medium" item={{
      fontFamily: tokens.TypographyBodyMdMediumFontFamily,
      fontSize: tokens.TypographyBodyMdMediumFontSize,
      fontWeight: tokens.TypographyBodyMdMediumFontWeight,
      lineHeight: tokens.TypographyBodyMdMediumLineHeight,
      letterSpacing: tokens.TypographyBodyMdMediumLetterSpacing
    }} />
    <TypographyRow label="Body SM" item={{
      fontFamily: tokens.TypographyBodySmFontFamily,
      fontSize: tokens.TypographyBodySmFontSize,
      fontWeight: tokens.TypographyBodySmFontWeight,
      lineHeight: tokens.TypographyBodySmLineHeight,
      letterSpacing: tokens.TypographyBodySmLetterSpacing
    }} />
    <TypographyRow label="Body XS" item={{
      fontFamily: tokens.TypographyBodyXsFontFamily,
      fontSize: tokens.TypographyBodyXsFontSize,
      fontWeight: tokens.TypographyBodyXsFontWeight,
      lineHeight: tokens.TypographyBodyXsLineHeight,
      letterSpacing: tokens.TypographyBodyXsLetterSpacing
    }} />
  </div>
);

const BrandComparisonCard = ({ brand, theme, title }) => (
  <div style={{ flex: 1, padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
    <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>{title}</h3>
    <div data-brand={brand} data-theme={theme} style={{ padding: '16px', borderRadius: '8px', background: 'var(--color-background-page)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--color-brand-primary)' }} />
          <div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-text-primary)' }}>Brand Primary</div>
            <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>var(--color-brand-primary)</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--color-background-surface)' }} />
          <div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-text-primary)' }}>Surface</div>
            <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>var(--color-background-surface)</div>
          </div>
        </div>
        <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--color-background-surface)' }}>
          <div style={{ fontSize: '16px', fontWeight: '400', color: 'var(--color-text-primary)', marginBottom: '8px' }}>
            Primary text on surface background
          </div>
          <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
            Secondary text on surface background
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const BrandComparison = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div style={{ display: 'flex', gap: '24px' }}>
      <BrandComparisonCard brand="voltfunded" theme="light" title="VoltFunded Light" />
      <BrandComparisonCard brand="instantfunding" theme="light" title="InstantFunding Light" />
    </div>
    <div style={{ display: 'flex', gap: '24px' }}>
      <BrandComparisonCard brand="voltfunded" theme="dark" title="VoltFunded Dark" />
      <BrandComparisonCard brand="instantfunding" theme="dark" title="InstantFunding Dark" />
    </div>
  </div>
);

