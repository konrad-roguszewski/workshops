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
    <!-- The XSL <xsl:for-each> element can be used to select every XML element of a specified node-set: -->
    <!-- We can also filter the output from the XML file by adding a criterion to the select attribute in the <xsl:for-each> element. -->
    <xsl:for-each select="catalog/cd[artist='Bob Dylan']">
      <!-- The select attribute indicates what XML element to sort on. -->
      <xsl:sort select="artist"/>
        <!-- The value of the required test attribute contains the expression to be evaluated. -->
        <xsl:if test="price &gt; 10">
          <tr>
            <!-- The <xsl:choose> element is used in conjunction with <xsl:when> and <xsl:otherwise> to express multiple conditional tests. -->
            <xsl:choose>
              <xsl:when test="price &gt; 10">
                <td bgcolor="#ff00ff">
                <!-- The select attribute, in the example, contains an XPath expression. An XPath expression works like navigating a file system; a forward slash (/) selects subdirectories. -->
                <xsl:value-of select="artist"/></td>
              </xsl:when>
              <xsl:otherwise>
                <td><xsl:value-of select="artist"/></td>
              </xsl:otherwise>
            </xsl:choose>
          </tr>
        </xsl:if>
    </xsl:for-each>
  </table>
  </body>
  </html>
<!-- The last two lines define the end of the template and the end of the style sheet. -->
</xsl:template>

</xsl:stylesheet>
