# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Visitors looking for basic information about Lembaga Pelawat Kompleks Penyayang BAKTI in Selangor, Malaysia.

## Product Purpose

Provide a clear internet presence for the organisation and make its basic information available to the public, including its mission, activities, board members, contact details, and donation options.

## Positioning

A public-facing information site for Lembaga Pelawat Kompleks Penyayang BAKTI; it is an official organisational presence rather than a transactional application or member portal.

## Operating Context

Visitors access the site on the web to understand the organisation and decide whether to contact or support it. The current implementation is a statically generated, single-page site in Bahasa Melayu.

## Capabilities and Constraints

- The site presents basic organisational information, activities, board members, contact details, and donation instructions.
- The donation call to action links visitors to ToyyibPay at `https://toyyibpay.com/penyayangbakti`.
- The site does not currently provide authentication, member accounts, forms, or an on-site transaction flow.
- Future work must preserve the confirmed language, organisation name, and contact information unless the organisation provides an update.

## Brand Commitments

- Organisation name: Lembaga Pelawat Kompleks Penyayang BAKTI.
- Primary language: Bahasa Melayu.
- Preserve the organisation's existing logo, photography, payment marks, and factual public-facing copy unless updated by the organisation.

## Evidence on Hand

- Mission, history, activities, board-member names, donation copy, and contact details are present in `src/pages/index.astro`.
- Logo and payment mark: `src/components/Logo.astro` and `public/images/toyyibpay-logo-white.svg`.
- Organisation and programme photography: `public/images/`.
- Current contact listing: Kompleks Penyayang Bakti, Jalan SD 13/4, Persiaran Meranti, Bandar Sri Damansara, 52200 Kuala Lumpur; Tel: 03-6277 8684 / 03-6277 8093.

## Product Principles

- Make essential organisational information easy for visitors to find.
- Keep the organisation name, language, contact details, and donation destination consistent.
- Use factual, respectful copy for the organisation and the people it serves.
- Preserve a lightweight, dependable public presence that works without an account or client-side application state.
