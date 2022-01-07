import * as d3 from 'd3'
import * as sc from 'scrollama'

const scroller = sc();


// X Axis -> Runtime
// Y Axis -> Rating (Normalized: User, Critics)
// Semi-Transparent Serpent 1 (Users) Thickness -> Vote Amount on IMDB
// Sharp Line 2 (Critics)
// Very light (golden) Background Serpent -> Gross Income
// Single Year Time Span on Top of Graph (4 Steps = Data Sets) -> Animation over Time