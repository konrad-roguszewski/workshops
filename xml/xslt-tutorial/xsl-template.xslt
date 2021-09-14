<!-- Since an XSL style sheet is an XML document, it always begins with the XML declaration -->
<?xml version="1.0" encoding="UTF-8"?>
<!-- defines that this document is an XSLT style sheet document (along with the version number and XSLT namespace attributes) -->
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- defines a template. The match="/" attribute associates the template with the root of the XML source document -->
<xsl:template match="/">
<!-- The content inside the <xsl:template> element defines some HTML to write to the output. -->
  <html>
  <body>
  <h2>My CD Collection</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Title</th>
      <th>Artist</th>
    </tr>
    <tr>
      <td>.</td>
      <td>.</td>
    </tr>
  </table>
  </body>
  </html>
<!-- The last two lines define the end of the template and the end of the style sheet. -->
</xsl:template>

</xsl:stylesheet>
