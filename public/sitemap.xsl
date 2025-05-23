<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Upick Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            max-width: 75em;
            margin: 0 auto;
            padding: 2em;
          }
          h1 {
            color: #2563eb;
            font-size: 2em;
            margin-bottom: 1em;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 1em 0;
          }
          th, td {
            padding: 0.75em;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
          }
          th {
            background-color: #f3f4f6;
            font-weight: 600;
          }
          tr:hover {
            background-color: #f9fafb;
          }
          a {
            color: #2563eb;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority {
            color: #059669;
          }
          .date {
            color: #6b7280;
          }
        </style>
      </head>
      <body>
        <h1>Upick Sitemap</h1>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <a href="{sitemap:loc}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
              </td>
              <td class="date">
                <xsl:value-of select="sitemap:lastmod"/>
              </td>
              <td>
                <xsl:value-of select="sitemap:changefreq"/>
              </td>
              <td class="priority">
                <xsl:value-of select="sitemap:priority"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 