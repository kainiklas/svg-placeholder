# SVG Placeholder Service

SVG Placeholder serves beautiful and customizable SVG graphics for various use-cases.

- Placeholder for Mockups and Prototypes
- Background images for your website

# Demo and Integration Documentation

- [Demo and Integration Documentation](https://svg-placeholder.web.app)

## Integration URL:

- https://svg-placeholder.web.app/{style}/{preset}?width={width}&height={height}&c1={c1}&c2={c2}

## Possible customization parameters:

- `{style} = [angular, burst, linear, stripes]`
- `{preset} = [1, 2, 3, 4], (optional)`
- `{width} = [number], (optional)` (e.g., 300)
- `{height} = [number], (optional)` (e.g., 300)
- `{c1} = [hex-html-color], (optional)` (e.g., #123456): Start color of linear gradient
- `{c2} = [hex-html-color], (optional)` (e.g., #123456): End color of linear gradient
- `{deg} = [0-360], (optional)`: Degree of the linear gradient from c1 to c2

## Example Placeholder

![Placeholder](https://svg-placeholder.web.app/angular/3)

- https://svg-placeholder.web.app/angular/3

# Development Hints

## Test functions locally

- `firebase emulators:start --only functions`

## Test hosting locally

- `firebase emulators:start --only hosting`
