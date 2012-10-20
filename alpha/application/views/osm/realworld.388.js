  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Leaflet.markercluster/example/realworld.388.js at master · danzel/Leaflet.markercluster · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.png" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="UIszbEwqZHmZtY7ROPbfS/WM3bKwwl7rHYBcUc33p8A=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-6f96eda30ff1556bf501fd7c2915aa0157322687.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-c6eeca9bdc855924123b0b9533f2ebe538f56027.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-6f842b2765e7d98b7e93cadc2a364b831cfae37e.js" type="text/javascript"></script>
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/assets/github-68a67b35cf28b4535754cc12a5c953951c570a50.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/danzel/Leaflet.markercluster/blob/c0871d7cb7558b319fff1a0cfabda5d8d9b74199/example/realworld.388.js'>
    <meta property="og:title" content="Leaflet.markercluster"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/danzel/Leaflet.markercluster"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-user-420.png?1345673561"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Leaflet.markercluster - Provides Marker Clustering functionality for Leaflet"/>

    <meta name="description" content="Leaflet.markercluster - Provides Marker Clustering functionality for Leaflet" />
  <link href="https://github.com/danzel/Leaflet.markercluster/commits/master.atom" rel="alternate" title="Recent Commits to Leaflet.markercluster:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob windows vis-public env-production ">
    <div id="wrapper">

    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo " href="https://github.com/">
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1340659561" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1340659561" />
          </a>


                  <!--
      make sure to use fully qualified URLs here since this nav
      is used on error pages on other domains
    -->
    <ul class="top-nav logged_out">
        <li class="pricing"><a href="https://github.com/plans">Signup and Pricing</a></li>
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
      <li class="features"><a href="https://github.com/features">Features</a></li>
        <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      <li class="login"><a href="https://github.com/login?return_to=%2Fdanzel%2FLeaflet.markercluster%2Fblob%2Fmaster%2Fexample%2Frealworld.388.js">Sign in</a></li>
    </ul>



          
        </div>
      </div>

      

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          


              <ul class="pagehead-actions">


          <li>
            <span class="star-button"><a href="/login?return_to=%2Fdanzel%2FLeaflet.markercluster" class="minibutton js-toggler-target entice tooltipped leftwards" title="You must be signed in to use this feature" rel="nofollow"><span class="mini-icon mini-icon-star"></span>Star</a><a class="social-count js-social-count" href="/danzel/Leaflet.markercluster/stargazers">96</a></span>
          </li>
          <li>
            <a href="/login?return_to=%2Fdanzel%2FLeaflet.markercluster" class="minibutton js-toggler-target fork-button entice tooltipped leftwards"  title="You must be signed in to fork a repository" rel="nofollow"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/danzel/Leaflet.markercluster/network" class="social-count">21</a>
          </li>
    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
            <span class="repo-label"><span>public</span></span>
            <span class="mega-icon mega-icon-public-repo"></span>
            <span class="author vcard">
              <a href="/danzel" class="url fn" itemprop="url" rel="author">
              <span itemprop="title">danzel</span>
              </a></span> /
            <strong><a href="/danzel/Leaflet.markercluster" class="js-current-repository">Leaflet.markercluster</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/danzel/Leaflet.markercluster" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/danzel/Leaflet.markercluster/network" highlight="repo_network">Network</a></li>
    <li><a href="/danzel/Leaflet.markercluster/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/danzel/Leaflet.markercluster/issues" highlight="repo_issues">Issues <span class='counter'>11</span></a></li>



    <li><a href="/danzel/Leaflet.markercluster/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/danzel/Leaflet.markercluster/tree-list/c0871d7cb7558b319fff1a0cfabda5d8d9b74199"
      data-blob-url-prefix="/danzel/Leaflet.markercluster/blob/c0871d7cb7558b319fff1a0cfabda5d8d9b74199"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/danzel/Leaflet.markercluster">Leaflet.markercluster</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/danzel/Leaflet.markercluster/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
      <li><a href="/danzel/Leaflet.markercluster/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">1</span></a></li>
      <li><a href="/danzel/Leaflet.markercluster/downloads" class="tabnav-tab" highlight="repo_downloads">Downloads <span class="counter ">1</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">

    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="#"
         class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
         data-hotkey="w"
         data-master-branch="master"
         data-ref="master">
         <span><em class="mini-icon mini-icon-branch"></em><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />
            <ul class="tabs">
              <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
              <li><a href="#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
            <div class="no-results js-not-filterable">Nothing to show</div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/danzel/Leaflet.markercluster/blob/animate-during-zoom/example/realworld.388.js" class="js-navigation-open" data-name="animate-during-zoom" rel="nofollow">animate-during-zoom</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/danzel/Leaflet.markercluster/blob/gh-pages/example/realworld.388.js" class="js-navigation-open" data-name="gh-pages" rel="nofollow">gh-pages</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/danzel/Leaflet.markercluster/blob/master/example/realworld.388.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                </h4>
              </div>
          </div>

          <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
            <div class="no-results js-not-filterable">Nothing to show</div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/danzel/Leaflet.markercluster/blob/0.1/example/realworld.388.js" class="js-navigation-open" data-name="0.1" rel="nofollow">0.1</a>
                </h4>
              </div>
          </div>
        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/danzel/Leaflet.markercluster" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/danzel/Leaflet.markercluster/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/danzel/Leaflet.markercluster/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">3</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:4e796e009ae140a553f253e2f677abd7 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:4e796e009ae140a553f253e2f677abd7 -->

<!-- block_view_fragment_key: views10/v8/blob:v21:08a05aff5433e31d9bda0512daf22861 -->

  <div id="slider">

    <div class="breadcrumb" data-path="example/realworld.388.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/danzel/Leaflet.markercluster/tree/c0871d7cb7558b319fff1a0cfabda5d8d9b74199" class="js-rewrite-sha" itemprop="url"><span itemprop="title">Leaflet.markercluster</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/danzel/Leaflet.markercluster/tree/c0871d7cb7558b319fff1a0cfabda5d8d9b74199/example" class="js-rewrite-sha" itemscope="url"><span itemprop="title">example</span></a></span> / <strong class="final-path">realworld.388.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="example/realworld.388.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

      
  <div class="commit file-history-tease js-blob-contributors-content" data-path="example/realworld.388.js/">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/798717b399b786a8fa7d1a94db8dc0a2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/danzel">danzel</a></span>
    <time class="js-relative-date" datetime="2012-07-25T15:49:44-07:00" title="2012-07-25 15:49:44">July 25, 2012</time>
    <div class="commit-title">
        <a href="/danzel/Leaflet.markercluster/commit/d64ec9191b02ffb991083f5e34eecc5cf704da96" class="message">Add some (much) larger examples. IE bombs out on 50000 usually, but c…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/798717b399b786a8fa7d1a94db8dc0a2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/danzel">danzel</a>
        </li>
      </ul>
    </div>
  </div>


    <div class="frames">
      <div class="frame frame-center" data-path="example/realworld.388.js/" data-permalink-url="/danzel/Leaflet.markercluster/blob/c0871d7cb7558b319fff1a0cfabda5d8d9b74199/example/realworld.388.js" data-title="Leaflet.markercluster/example/realworld.388.js at master · danzel/Leaflet.markercluster · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>393 lines (392 sloc)</span>
                <span>15.241 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/danzel/Leaflet.markercluster/edit/c0871d7cb7558b319fff1a0cfabda5d8d9b74199/example/realworld.388.js" data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
                  </li>
                <li>
                  <a href="/danzel/Leaflet.markercluster/raw/master/example/realworld.388.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a>
                </li>
                  <li>
                    <a href="/danzel/Leaflet.markercluster/blame/master/example/realworld.388.js" class="minibutton grouped-button bigger lighter">Blame</a>
                  </li>
                <li>
                  <a href="/danzel/Leaflet.markercluster/commits/master/example/realworld.388.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><br/></div><div class='line' id='LC2'><span class="c1">//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde</span></div><div class='line' id='LC3'><span class="c1">//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/</span></div><div class='line' id='LC4'><span class="kd">var</span> <span class="nx">addressPoints</span> <span class="o">=</span> <span class="p">[</span></div><div class='line' id='LC5'><span class="p">[</span><span class="o">-</span><span class="mf">37.8210922667</span><span class="p">,</span> <span class="mf">175.2209316333</span><span class="p">,</span> <span class="s2">&quot;2&quot;</span><span class="p">],</span></div><div class='line' id='LC6'><span class="p">[</span><span class="o">-</span><span class="mf">37.8210819833</span><span class="p">,</span> <span class="mf">175.2213903167</span><span class="p">,</span> <span class="s2">&quot;3&quot;</span><span class="p">],</span></div><div class='line' id='LC7'><span class="p">[</span><span class="o">-</span><span class="mf">37.8210881833</span><span class="p">,</span> <span class="mf">175.2215004833</span><span class="p">,</span> <span class="s2">&quot;3A&quot;</span><span class="p">],</span></div><div class='line' id='LC8'><span class="p">[</span><span class="o">-</span><span class="mf">37.8211946833</span><span class="p">,</span> <span class="mf">175.2213655333</span><span class="p">,</span> <span class="s2">&quot;1&quot;</span><span class="p">],</span></div><div class='line' id='LC9'><span class="p">[</span><span class="o">-</span><span class="mf">37.8209458667</span><span class="p">,</span> <span class="mf">175.2214051333</span><span class="p">,</span> <span class="s2">&quot;5&quot;</span><span class="p">],</span></div><div class='line' id='LC10'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208292333</span><span class="p">,</span> <span class="mf">175.2214374833</span><span class="p">,</span> <span class="s2">&quot;7&quot;</span><span class="p">],</span></div><div class='line' id='LC11'><span class="p">[</span><span class="o">-</span><span class="mf">37.8325816</span><span class="p">,</span> <span class="mf">175.2238798667</span><span class="p">,</span> <span class="s2">&quot;537&quot;</span><span class="p">],</span></div><div class='line' id='LC12'><span class="p">[</span><span class="o">-</span><span class="mf">37.8315855167</span><span class="p">,</span> <span class="mf">175.2279767</span><span class="p">,</span> <span class="s2">&quot;454&quot;</span><span class="p">],</span></div><div class='line' id='LC13'><span class="p">[</span><span class="o">-</span><span class="mf">37.8096336833</span><span class="p">,</span> <span class="mf">175.2223743833</span><span class="p">,</span> <span class="s2">&quot;176&quot;</span><span class="p">],</span></div><div class='line' id='LC14'><span class="p">[</span><span class="o">-</span><span class="mf">37.80970685</span><span class="p">,</span> <span class="mf">175.2221815833</span><span class="p">,</span> <span class="s2">&quot;178&quot;</span><span class="p">],</span></div><div class='line' id='LC15'><span class="p">[</span><span class="o">-</span><span class="mf">37.8102146667</span><span class="p">,</span> <span class="mf">175.2211562833</span><span class="p">,</span> <span class="s2">&quot;190&quot;</span><span class="p">],</span></div><div class='line' id='LC16'><span class="p">[</span><span class="o">-</span><span class="mf">37.8088037167</span><span class="p">,</span> <span class="mf">175.2242227</span><span class="p">,</span> <span class="s2">&quot;156&quot;</span><span class="p">],</span></div><div class='line' id='LC17'><span class="p">[</span><span class="o">-</span><span class="mf">37.8112330167</span><span class="p">,</span> <span class="mf">175.2193425667</span><span class="p">,</span> <span class="s2">&quot;210&quot;</span><span class="p">],</span></div><div class='line' id='LC18'><span class="p">[</span><span class="o">-</span><span class="mf">37.8116368667</span><span class="p">,</span> <span class="mf">175.2193005167</span><span class="p">,</span> <span class="s2">&quot;212&quot;</span><span class="p">],</span></div><div class='line' id='LC19'><span class="p">[</span><span class="o">-</span><span class="mf">37.80812645</span><span class="p">,</span> <span class="mf">175.2255449333</span><span class="p">,</span> <span class="s2">&quot;146&quot;</span><span class="p">],</span></div><div class='line' id='LC20'><span class="p">[</span><span class="o">-</span><span class="mf">37.8080231333</span><span class="p">,</span> <span class="mf">175.2286383167</span><span class="p">,</span> <span class="s2">&quot;125&quot;</span><span class="p">],</span></div><div class='line' id='LC21'><span class="p">[</span><span class="o">-</span><span class="mf">37.8089538667</span><span class="p">,</span> <span class="mf">175.2222222333</span><span class="p">,</span> <span class="s2">&quot;174&quot;</span><span class="p">],</span></div><div class='line' id='LC22'><span class="p">[</span><span class="o">-</span><span class="mf">37.8080905833</span><span class="p">,</span> <span class="mf">175.2275400667</span><span class="p">,</span> <span class="s2">&quot;129&quot;</span><span class="p">],</span></div><div class='line' id='LC23'><span class="p">[</span><span class="o">-</span><span class="mf">37.808811</span><span class="p">,</span> <span class="mf">175.2227592833</span><span class="p">,</span> <span class="s2">&quot;172&quot;</span><span class="p">],</span></div><div class='line' id='LC24'><span class="p">[</span><span class="o">-</span><span class="mf">37.80832975</span><span class="p">,</span> <span class="mf">175.2276898167</span><span class="p">,</span> <span class="s2">&quot;131&quot;</span><span class="p">],</span></div><div class='line' id='LC25'><span class="p">[</span><span class="o">-</span><span class="mf">37.8089395333</span><span class="p">,</span> <span class="mf">175.2281710333</span><span class="p">,</span> <span class="s2">&quot;133&quot;</span><span class="p">],</span></div><div class='line' id='LC26'><span class="p">[</span><span class="o">-</span><span class="mf">37.8093421</span><span class="p">,</span> <span class="mf">175.2274883167</span><span class="p">,</span> <span class="s2">&quot;135&quot;</span><span class="p">],</span></div><div class='line' id='LC27'><span class="p">[</span><span class="o">-</span><span class="mf">37.8084820833</span><span class="p">,</span> <span class="mf">175.22601925</span><span class="p">,</span> <span class="s2">&quot;137&quot;</span><span class="p">],</span></div><div class='line' id='LC28'><span class="p">[</span><span class="o">-</span><span class="mf">37.80881015</span><span class="p">,</span> <span class="mf">175.22622865</span><span class="p">,</span> <span class="s2">&quot;139&quot;</span><span class="p">],</span></div><div class='line' id='LC29'><span class="p">[</span><span class="o">-</span><span class="mf">37.8090947667</span><span class="p">,</span> <span class="mf">175.2263585667</span><span class="p">,</span> <span class="s2">&quot;141&quot;</span><span class="p">],</span></div><div class='line' id='LC30'><span class="p">[</span><span class="o">-</span><span class="mf">37.8092962333</span><span class="p">,</span> <span class="mf">175.2244872333</span><span class="p">,</span> <span class="s2">&quot;147&quot;</span><span class="p">],</span></div><div class='line' id='LC31'><span class="p">[</span><span class="o">-</span><span class="mf">37.8091016667</span><span class="p">,</span> <span class="mf">175.2249140167</span><span class="p">,</span> <span class="s2">&quot;145&quot;</span><span class="p">],</span></div><div class='line' id='LC32'><span class="p">[</span><span class="o">-</span><span class="mf">37.8088785167</span><span class="p">,</span> <span class="mf">175.2253611667</span><span class="p">,</span> <span class="s2">&quot;143&quot;</span><span class="p">],</span></div><div class='line' id='LC33'><span class="p">[</span><span class="o">-</span><span class="mf">37.80825965</span><span class="p">,</span> <span class="mf">175.22530115</span><span class="p">,</span> <span class="s2">&quot;148&quot;</span><span class="p">],</span></div><div class='line' id='LC34'><span class="p">[</span><span class="o">-</span><span class="mf">37.80995685</span><span class="p">,</span> <span class="mf">175.2238554333</span><span class="p">,</span> <span class="s2">&quot;153&quot;</span><span class="p">],</span></div><div class='line' id='LC35'><span class="p">[</span><span class="o">-</span><span class="mf">37.80975435</span><span class="p">,</span> <span class="mf">175.2238417833</span><span class="p">,</span> <span class="s2">&quot;151&quot;</span><span class="p">],</span></div><div class='line' id='LC36'><span class="p">[</span><span class="o">-</span><span class="mf">37.80950755</span><span class="p">,</span> <span class="mf">175.2237912</span><span class="p">,</span> <span class="s2">&quot;149&quot;</span><span class="p">],</span></div><div class='line' id='LC37'><span class="p">[</span><span class="o">-</span><span class="mf">37.8092772667</span><span class="p">,</span> <span class="mf">175.2231980833</span><span class="p">,</span> <span class="s2">&quot;170&quot;</span><span class="p">],</span></div><div class='line' id='LC38'><span class="p">[</span><span class="o">-</span><span class="mf">37.8082753833</span><span class="p">,</span> <span class="mf">175.20672975</span><span class="p">,</span> <span class="s2">&quot;4&quot;</span><span class="p">],</span></div><div class='line' id='LC39'><span class="p">[</span><span class="o">-</span><span class="mf">37.8078434833</span><span class="p">,</span> <span class="mf">175.211822</span><span class="p">,</span> <span class="s2">&quot;56&quot;</span><span class="p">],</span></div><div class='line' id='LC40'><span class="p">[</span><span class="o">-</span><span class="mf">37.8083775667</span><span class="p">,</span> <span class="mf">175.2090812333</span><span class="p">,</span> <span class="s2">&quot;30B&quot;</span><span class="p">],</span></div><div class='line' id='LC41'><span class="p">[</span><span class="o">-</span><span class="mf">37.8084588</span><span class="p">,</span> <span class="mf">175.2058838167</span><span class="p">,</span> <span class="s2">&quot;174&quot;</span><span class="p">],</span></div><div class='line' id='LC42'><span class="p">[</span><span class="o">-</span><span class="mf">37.8088788333</span><span class="p">,</span> <span class="mf">175.2062702833</span><span class="p">,</span> <span class="s2">&quot;175&quot;</span><span class="p">],</span></div><div class='line' id='LC43'><span class="p">[</span><span class="o">-</span><span class="mf">37.8091632833</span><span class="p">,</span> <span class="mf">175.20514875</span><span class="p">,</span> <span class="s2">&quot;182A&quot;</span><span class="p">],</span></div><div class='line' id='LC44'><span class="p">[</span><span class="o">-</span><span class="mf">37.8094891167</span><span class="p">,</span> <span class="mf">175.20384695</span><span class="p">,</span> <span class="s2">&quot;202&quot;</span><span class="p">],</span></div><div class='line' id='LC45'><span class="p">[</span><span class="o">-</span><span class="mf">37.8156715667</span><span class="p">,</span> <span class="mf">175.2034881667</span><span class="p">,</span> <span class="s2">&quot;277&quot;</span><span class="p">],</span></div><div class='line' id='LC46'><span class="p">[</span><span class="o">-</span><span class="mf">37.8109189333</span><span class="p">,</span> <span class="mf">175.2024631</span><span class="p">,</span> <span class="s2">&quot;220&quot;</span><span class="p">],</span></div><div class='line' id='LC47'><span class="p">[</span><span class="o">-</span><span class="mf">37.8108164333</span><span class="p">,</span> <span class="mf">175.2039622</span><span class="p">,</span> <span class="s2">&quot;219&quot;</span><span class="p">],</span></div><div class='line' id='LC48'><span class="p">[</span><span class="o">-</span><span class="mf">37.8125773667</span><span class="p">,</span> <span class="mf">175.2026079667</span><span class="p">,</span> <span class="s2">&quot;238&quot;</span><span class="p">],</span></div><div class='line' id='LC49'><span class="p">[</span><span class="o">-</span><span class="mf">37.8125799333</span><span class="p">,</span> <span class="mf">175.2032824</span><span class="p">,</span> <span class="s2">&quot;241A&quot;</span><span class="p">],</span></div><div class='line' id='LC50'><span class="p">[</span><span class="o">-</span><span class="mf">37.8125869</span><span class="p">,</span> <span class="mf">175.2037423833</span><span class="p">,</span> <span class="s2">&quot;241C&quot;</span><span class="p">],</span></div><div class='line' id='LC51'><span class="p">[</span><span class="o">-</span><span class="mf">37.8140266833</span><span class="p">,</span> <span class="mf">175.2025706</span><span class="p">,</span> <span class="s2">&quot;256&quot;</span><span class="p">],</span></div><div class='line' id='LC52'><span class="p">[</span><span class="o">-</span><span class="mf">37.80932</span><span class="p">,</span> <span class="mf">175.2051094333</span><span class="p">,</span> <span class="s2">&quot;182B&quot;</span><span class="p">],</span></div><div class='line' id='LC53'><span class="p">[</span><span class="o">-</span><span class="mf">37.8098799667</span><span class="p">,</span> <span class="mf">175.2040444167</span><span class="p">,</span> <span class="s2">&quot;197&quot;</span><span class="p">],</span></div><div class='line' id='LC54'><span class="p">[</span><span class="o">-</span><span class="mf">37.8094298833</span><span class="p">,</span> <span class="mf">175.20561245</span><span class="p">,</span> <span class="s2">&quot;189&quot;</span><span class="p">],</span></div><div class='line' id='LC55'><span class="p">[</span><span class="o">-</span><span class="mf">37.8172409333</span><span class="p">,</span> <span class="mf">175.2035291167</span><span class="p">,</span> <span class="s2">&quot;287&quot;</span><span class="p">],</span></div><div class='line' id='LC56'><span class="p">[</span><span class="o">-</span><span class="mf">37.8232166667</span><span class="p">,</span> <span class="mf">175.22452865</span><span class="p">,</span> <span class="s2">&quot;2028&quot;</span><span class="p">],</span></div><div class='line' id='LC57'><span class="p">[</span><span class="o">-</span><span class="mf">37.8225024333</span><span class="p">,</span> <span class="mf">175.2249944667</span><span class="p">,</span> <span class="s2">&quot;2022&quot;</span><span class="p">],</span></div><div class='line' id='LC58'><span class="p">[</span><span class="o">-</span><span class="mf">37.82334135</span><span class="p">,</span> <span class="mf">175.2244748667</span><span class="p">,</span> <span class="s2">&quot;2030&quot;</span><span class="p">],</span></div><div class='line' id='LC59'><span class="p">[</span><span class="o">-</span><span class="mf">37.8229725333</span><span class="p">,</span> <span class="mf">175.2246809333</span><span class="p">,</span> <span class="s2">&quot;2026&quot;</span><span class="p">],</span></div><div class='line' id='LC60'><span class="p">[</span><span class="o">-</span><span class="mf">37.8224034667</span><span class="p">,</span> <span class="mf">175.22507345</span><span class="p">,</span> <span class="s2">&quot;2020&quot;</span><span class="p">],</span></div><div class='line' id='LC61'><span class="p">[</span><span class="o">-</span><span class="mf">37.8227806</span><span class="p">,</span> <span class="mf">175.2248285833</span><span class="p">,</span> <span class="s2">&quot;2024&quot;</span><span class="p">],</span></div><div class='line' id='LC62'><span class="p">[</span><span class="o">-</span><span class="mf">37.8178801</span><span class="p">,</span> <span class="mf">175.2181871667</span><span class="p">,</span> <span class="s2">&quot;6&quot;</span><span class="p">],</span></div><div class='line' id='LC63'><span class="p">[</span><span class="o">-</span><span class="mf">37.81811315</span><span class="p">,</span> <span class="mf">175.2180543667</span><span class="p">,</span> <span class="s2">&quot;4&quot;</span><span class="p">],</span></div><div class='line' id='LC64'><span class="p">[</span><span class="o">-</span><span class="mf">37.8181739833</span><span class="p">,</span> <span class="mf">175.21851995</span><span class="p">,</span> <span class="s2">&quot;1&quot;</span><span class="p">],</span></div><div class='line' id='LC65'><span class="p">[</span><span class="o">-</span><span class="mf">37.81797515</span><span class="p">,</span> <span class="mf">175.2186312</span><span class="p">,</span> <span class="s2">&quot;3&quot;</span><span class="p">],</span></div><div class='line' id='LC66'><span class="p">[</span><span class="o">-</span><span class="mf">37.8181787</span><span class="p">,</span> <span class="mf">175.2176995</span><span class="p">,</span> <span class="s2">&quot;2A&quot;</span><span class="p">],</span></div><div class='line' id='LC67'><span class="p">[</span><span class="o">-</span><span class="mf">37.8183385333</span><span class="p">,</span> <span class="mf">175.21812895</span><span class="p">,</span> <span class="s2">&quot;2&quot;</span><span class="p">],</span></div><div class='line' id='LC68'><span class="p">[</span><span class="o">-</span><span class="mf">37.8293053167</span><span class="p">,</span> <span class="mf">175.2105357833</span><span class="p">,</span> <span class="s2">&quot;31&quot;</span><span class="p">],</span></div><div class='line' id='LC69'><span class="p">[</span><span class="o">-</span><span class="mf">37.8309444333</span><span class="p">,</span> <span class="mf">175.21208735</span><span class="p">,</span> <span class="s2">&quot;16&quot;</span><span class="p">],</span></div><div class='line' id='LC70'><span class="p">[</span><span class="o">-</span><span class="mf">37.8306726667</span><span class="p">,</span> <span class="mf">175.2115020833</span><span class="p">,</span> <span class="s2">&quot;19&quot;</span><span class="p">],</span></div><div class='line' id='LC71'><span class="p">[</span><span class="o">-</span><span class="mf">37.8300903</span><span class="p">,</span> <span class="mf">175.2120791</span><span class="p">,</span> <span class="s2">&quot;26&quot;</span><span class="p">],</span></div><div class='line' id='LC72'><span class="p">[</span><span class="o">-</span><span class="mf">37.8289416167</span><span class="p">,</span> <span class="mf">175.2113778333</span><span class="p">,</span> <span class="s2">&quot;33&quot;</span><span class="p">],</span></div><div class='line' id='LC73'><span class="p">[</span><span class="o">-</span><span class="mf">37.8274969167</span><span class="p">,</span> <span class="mf">175.2113355167</span><span class="p">,</span> <span class="s2">&quot;53&quot;</span><span class="p">],</span></div><div class='line' id='LC74'><span class="p">[</span><span class="o">-</span><span class="mf">37.8199192667</span><span class="p">,</span> <span class="mf">175.2173622833</span><span class="p">,</span> <span class="s2">&quot;5A&quot;</span><span class="p">],</span></div><div class='line' id='LC75'><span class="p">[</span><span class="o">-</span><span class="mf">37.8200392833</span><span class="p">,</span> <span class="mf">175.2174100167</span><span class="p">,</span> <span class="s2">&quot;3&quot;</span><span class="p">],</span></div><div class='line' id='LC76'><span class="p">[</span><span class="o">-</span><span class="mf">37.8196328</span><span class="p">,</span> <span class="mf">175.2167642</span><span class="p">,</span> <span class="s2">&quot;18&quot;</span><span class="p">],</span></div><div class='line' id='LC77'><span class="p">[</span><span class="o">-</span><span class="mf">37.81752585</span><span class="p">,</span> <span class="mf">175.2155467667</span><span class="p">,</span> <span class="s2">&quot;22C&quot;</span><span class="p">],</span></div><div class='line' id='LC78'><span class="p">[</span><span class="o">-</span><span class="mf">37.81766615</span><span class="p">,</span> <span class="mf">175.2153714167</span><span class="p">,</span> <span class="s2">&quot;22B&quot;</span><span class="p">],</span></div><div class='line' id='LC79'><span class="p">[</span><span class="o">-</span><span class="mf">37.8179022667</span><span class="p">,</span> <span class="mf">175.2151616833</span><span class="p">,</span> <span class="s2">&quot;22A&quot;</span><span class="p">],</span></div><div class='line' id='LC80'><span class="p">[</span><span class="o">-</span><span class="mf">37.8191980333</span><span class="p">,</span> <span class="mf">175.21664245</span><span class="p">,</span> <span class="s2">&quot;20A&quot;</span><span class="p">],</span></div><div class='line' id='LC81'><span class="p">[</span><span class="o">-</span><span class="mf">37.81799325</span><span class="p">,</span> <span class="mf">175.21565925</span><span class="p">,</span> <span class="s2">&quot;20C&quot;</span><span class="p">],</span></div><div class='line' id='LC82'><span class="p">[</span><span class="o">-</span><span class="mf">37.8187486333</span><span class="p">,</span> <span class="mf">175.2165228667</span><span class="p">,</span> <span class="s2">&quot;20B&quot;</span><span class="p">],</span></div><div class='line' id='LC83'><span class="p">[</span><span class="o">-</span><span class="mf">37.81964875</span><span class="p">,</span> <span class="mf">175.2172874167</span><span class="p">,</span> <span class="s2">&quot;7&quot;</span><span class="p">],</span></div><div class='line' id='LC84'><span class="p">[</span><span class="o">-</span><span class="mf">37.81925545</span><span class="p">,</span> <span class="mf">175.2171617</span><span class="p">,</span> <span class="s2">&quot;11&quot;</span><span class="p">],</span></div><div class='line' id='LC85'><span class="p">[</span><span class="o">-</span><span class="mf">37.8190491667</span><span class="p">,</span> <span class="mf">175.2170928333</span><span class="p">,</span> <span class="s2">&quot;13&quot;</span><span class="p">],</span></div><div class='line' id='LC86'><span class="p">[</span><span class="o">-</span><span class="mf">37.8194515667</span><span class="p">,</span> <span class="mf">175.2172147167</span><span class="p">,</span> <span class="s2">&quot;9&quot;</span><span class="p">],</span></div><div class='line' id='LC87'><span class="p">[</span><span class="o">-</span><span class="mf">37.81981045</span><span class="p">,</span> <span class="mf">175.21733245</span><span class="p">,</span> <span class="s2">&quot;5B&quot;</span><span class="p">],</span></div><div class='line' id='LC88'><span class="p">[</span><span class="o">-</span><span class="mf">37.81876595</span><span class="p">,</span> <span class="mf">175.2172445167</span><span class="p">,</span> <span class="s2">&quot;15B&quot;</span><span class="p">],</span></div><div class='line' id='LC89'><span class="p">[</span><span class="o">-</span><span class="mf">37.8185999167</span><span class="p">,</span> <span class="mf">175.2172441</span><span class="p">,</span> <span class="s2">&quot;17A&quot;</span><span class="p">],</span></div><div class='line' id='LC90'><span class="p">[</span><span class="o">-</span><span class="mf">37.81816745</span><span class="p">,</span> <span class="mf">175.21725905</span><span class="p">,</span> <span class="s2">&quot;21B&quot;</span><span class="p">],</span></div><div class='line' id='LC91'><span class="p">[</span><span class="o">-</span><span class="mf">37.8182157167</span><span class="p">,</span> <span class="mf">175.2164626333</span><span class="p">,</span> <span class="s2">&quot;24&quot;</span><span class="p">],</span></div><div class='line' id='LC92'><span class="p">[</span><span class="o">-</span><span class="mf">37.8180109667</span><span class="p">,</span> <span class="mf">175.2173984167</span><span class="p">,</span> <span class="s2">&quot;23A&quot;</span><span class="p">],</span></div><div class='line' id='LC93'><span class="p">[</span><span class="o">-</span><span class="mf">37.8179918</span><span class="p">,</span> <span class="mf">175.217159</span><span class="p">,</span> <span class="s2">&quot;23B&quot;</span><span class="p">],</span></div><div class='line' id='LC94'><span class="p">[</span><span class="o">-</span><span class="mf">37.8188473167</span><span class="p">,</span> <span class="mf">175.2170330333</span><span class="p">,</span> <span class="s2">&quot;15&quot;</span><span class="p">],</span></div><div class='line' id='LC95'><span class="p">[</span><span class="o">-</span><span class="mf">37.8186481333</span><span class="p">,</span> <span class="mf">175.2169800667</span><span class="p">,</span> <span class="s2">&quot;17&quot;</span><span class="p">],</span></div><div class='line' id='LC96'><span class="p">[</span><span class="o">-</span><span class="mf">37.8184132</span><span class="p">,</span> <span class="mf">175.2169327333</span><span class="p">,</span> <span class="s2">&quot;19&quot;</span><span class="p">],</span></div><div class='line' id='LC97'><span class="p">[</span><span class="o">-</span><span class="mf">37.8202288333</span><span class="p">,</span> <span class="mf">175.2174746333</span><span class="p">,</span> <span class="s2">&quot;1&quot;</span><span class="p">],</span></div><div class='line' id='LC98'><span class="p">[</span><span class="o">-</span><span class="mf">37.818193</span><span class="p">,</span> <span class="mf">175.2169955667</span><span class="p">,</span> <span class="s2">&quot;21&quot;</span><span class="p">],</span></div><div class='line' id='LC99'><span class="p">[</span><span class="o">-</span><span class="mf">37.8178000833</span><span class="p">,</span> <span class="mf">175.21733275</span><span class="p">,</span> <span class="s2">&quot;25&quot;</span><span class="p">],</span></div><div class='line' id='LC100'><span class="p">[</span><span class="o">-</span><span class="mf">37.8176839</span><span class="p">,</span> <span class="mf">175.2168488333</span><span class="p">,</span> <span class="s2">&quot;26&quot;</span><span class="p">],</span></div><div class='line' id='LC101'><span class="p">[</span><span class="o">-</span><span class="mf">37.8198172</span><span class="p">,</span> <span class="mf">175.2204960667</span><span class="p">,</span> <span class="s2">&quot;5&quot;</span><span class="p">],</span></div><div class='line' id='LC102'><span class="p">[</span><span class="o">-</span><span class="mf">37.819986</span><span class="p">,</span> <span class="mf">175.22049635</span><span class="p">,</span> <span class="s2">&quot;3&quot;</span><span class="p">],</span></div><div class='line' id='LC103'><span class="p">[</span><span class="o">-</span><span class="mf">37.8197666</span><span class="p">,</span> <span class="mf">175.2200825</span><span class="p">,</span> <span class="s2">&quot;4&quot;</span><span class="p">],</span></div><div class='line' id='LC104'><span class="p">[</span><span class="o">-</span><span class="mf">37.8193835833</span><span class="p">,</span> <span class="mf">175.2191669667</span><span class="p">,</span> <span class="s2">&quot;10&quot;</span><span class="p">],</span></div><div class='line' id='LC105'><span class="p">[</span><span class="o">-</span><span class="mf">37.8193426333</span><span class="p">,</span> <span class="mf">175.2198626667</span><span class="p">,</span> <span class="s2">&quot;11&quot;</span><span class="p">],</span></div><div class='line' id='LC106'><span class="p">[</span><span class="o">-</span><span class="mf">37.8192171667</span><span class="p">,</span> <span class="mf">175.2191711</span><span class="p">,</span> <span class="s2">&quot;12&quot;</span><span class="p">],</span></div><div class='line' id='LC107'><span class="p">[</span><span class="o">-</span><span class="mf">37.8192621333</span><span class="p">,</span> <span class="mf">175.2196364167</span><span class="p">,</span> <span class="s2">&quot;13&quot;</span><span class="p">],</span></div><div class='line' id='LC108'><span class="p">[</span><span class="o">-</span><span class="mf">37.8195289667</span><span class="p">,</span> <span class="mf">175.2193943167</span><span class="p">,</span> <span class="s2">&quot;8&quot;</span><span class="p">],</span></div><div class='line' id='LC109'><span class="p">[</span><span class="o">-</span><span class="mf">37.81946</span><span class="p">,</span> <span class="mf">175.2201499167</span><span class="p">,</span> <span class="s2">&quot;9&quot;</span><span class="p">],</span></div><div class='line' id='LC110'><span class="p">[</span><span class="o">-</span><span class="mf">37.8196037833</span><span class="p">,</span> <span class="mf">175.219674</span><span class="p">,</span> <span class="s2">&quot;6&quot;</span><span class="p">],</span></div><div class='line' id='LC111'><span class="p">[</span><span class="o">-</span><span class="mf">37.8194712</span><span class="p">,</span> <span class="mf">175.2204032</span><span class="p">,</span> <span class="s2">&quot;7A&quot;</span><span class="p">],</span></div><div class='line' id='LC112'><span class="p">[</span><span class="o">-</span><span class="mf">37.8196381</span><span class="p">,</span> <span class="mf">175.2203709333</span><span class="p">,</span> <span class="s2">&quot;7&quot;</span><span class="p">],</span></div><div class='line' id='LC113'><span class="p">[</span><span class="o">-</span><span class="mf">37.8200137667</span><span class="p">,</span> <span class="mf">175.2201364333</span><span class="p">,</span> <span class="s2">&quot;2&quot;</span><span class="p">],</span></div><div class='line' id='LC114'><span class="p">[</span><span class="o">-</span><span class="mf">37.8191725167</span><span class="p">,</span> <span class="mf">175.2193772833</span><span class="p">,</span> <span class="s2">&quot;14&quot;</span><span class="p">],</span></div><div class='line' id='LC115'><span class="p">[</span><span class="o">-</span><span class="mf">37.8214417333</span><span class="p">,</span> <span class="mf">175.2256822167</span><span class="p">,</span> <span class="s2">&quot;4&quot;</span><span class="p">],</span></div><div class='line' id='LC116'><span class="p">[</span><span class="o">-</span><span class="mf">37.8210291</span><span class="p">,</span> <span class="mf">175.2259429667</span><span class="p">,</span> <span class="s2">&quot;8&quot;</span><span class="p">],</span></div><div class='line' id='LC117'><span class="p">[</span><span class="o">-</span><span class="mf">37.8212328333</span><span class="p">,</span> <span class="mf">175.2258132</span><span class="p">,</span> <span class="s2">&quot;6&quot;</span><span class="p">],</span></div><div class='line' id='LC118'><span class="p">[</span><span class="o">-</span><span class="mf">37.8216819833</span><span class="p">,</span> <span class="mf">175.2253209</span><span class="p">,</span> <span class="s2">&quot;3&quot;</span><span class="p">],</span></div><div class='line' id='LC119'><span class="p">[</span><span class="o">-</span><span class="mf">37.8334697167</span><span class="p">,</span> <span class="mf">175.2038651667</span><span class="p">,</span> <span class="s2">&quot;326&quot;</span><span class="p">],</span></div><div class='line' id='LC120'><span class="p">[</span><span class="o">-</span><span class="mf">37.8322603667</span><span class="p">,</span> <span class="mf">175.2028621167</span><span class="p">,</span> <span class="s2">&quot;317&quot;</span><span class="p">],</span></div><div class='line' id='LC121'><span class="p">[</span><span class="o">-</span><span class="mf">37.8322013667</span><span class="p">,</span> <span class="mf">175.2046802667</span><span class="p">,</span> <span class="s2">&quot;1/341&quot;</span><span class="p">],</span></div><div class='line' id='LC122'><span class="p">[</span><span class="o">-</span><span class="mf">37.8320576167</span><span class="p">,</span> <span class="mf">175.2165535833</span><span class="p">,</span> <span class="s2">&quot;435&quot;</span><span class="p">],</span></div><div class='line' id='LC123'><span class="p">[</span><span class="o">-</span><span class="mf">37.8319540333</span><span class="p">,</span> <span class="mf">175.20506915</span><span class="p">,</span> <span class="s2">&quot;2/341&quot;</span><span class="p">],</span></div><div class='line' id='LC124'><span class="p">[</span><span class="o">-</span><span class="mf">37.8316975667</span><span class="p">,</span> <span class="mf">175.2053442333</span><span class="p">,</span> <span class="s2">&quot;3/341&quot;</span><span class="p">],</span></div><div class='line' id='LC125'><span class="p">[</span><span class="o">-</span><span class="mf">37.8328229833</span><span class="p">,</span> <span class="mf">175.2062598</span><span class="p">,</span> <span class="s2">&quot;346&quot;</span><span class="p">],</span></div><div class='line' id='LC126'><span class="p">[</span><span class="o">-</span><span class="mf">37.83161565</span><span class="p">,</span> <span class="mf">175.2074915</span><span class="p">,</span> <span class="s2">&quot;355&quot;</span><span class="p">],</span></div><div class='line' id='LC127'><span class="p">[</span><span class="o">-</span><span class="mf">37.83219305</span><span class="p">,</span> <span class="mf">175.20629425</span><span class="p">,</span> <span class="s2">&quot;347&quot;</span><span class="p">],</span></div><div class='line' id='LC128'><span class="p">[</span><span class="o">-</span><span class="mf">37.8328549</span><span class="p">,</span> <span class="mf">175.2080619667</span><span class="p">,</span> <span class="s2">&quot;362&quot;</span><span class="p">],</span></div><div class='line' id='LC129'><span class="p">[</span><span class="o">-</span><span class="mf">37.8321289667</span><span class="p">,</span> <span class="mf">175.2084019333</span><span class="p">,</span> <span class="s2">&quot;367&quot;</span><span class="p">],</span></div><div class='line' id='LC130'><span class="p">[</span><span class="o">-</span><span class="mf">37.8322225167</span><span class="p">,</span> <span class="mf">175.2120427667</span><span class="p">,</span> <span class="s2">&quot;397&quot;</span><span class="p">],</span></div><div class='line' id='LC131'><span class="p">[</span><span class="o">-</span><span class="mf">37.8321649</span><span class="p">,</span> <span class="mf">175.21119325</span><span class="p">,</span> <span class="s2">&quot;393&quot;</span><span class="p">],</span></div><div class='line' id='LC132'><span class="p">[</span><span class="o">-</span><span class="mf">37.8321458833</span><span class="p">,</span> <span class="mf">175.2131246333</span><span class="p">,</span> <span class="s2">&quot;407&quot;</span><span class="p">],</span></div><div class='line' id='LC133'><span class="p">[</span><span class="o">-</span><span class="mf">37.8327043833</span><span class="p">,</span> <span class="mf">175.21377405</span><span class="p">,</span> <span class="s2">&quot;416&quot;</span><span class="p">],</span></div><div class='line' id='LC134'><span class="p">[</span><span class="o">-</span><span class="mf">37.8321267167</span><span class="p">,</span> <span class="mf">175.2144058167</span><span class="p">,</span> <span class="s2">&quot;417&quot;</span><span class="p">],</span></div><div class='line' id='LC135'><span class="p">[</span><span class="o">-</span><span class="mf">37.83212555</span><span class="p">,</span> <span class="mf">175.2096521333</span><span class="p">,</span> <span class="s2">&quot;373&quot;</span><span class="p">],</span></div><div class='line' id='LC136'><span class="p">[</span><span class="o">-</span><span class="mf">37.8331028667</span><span class="p">,</span> <span class="mf">175.20928495</span><span class="p">,</span> <span class="s2">&quot;366&quot;</span><span class="p">],</span></div><div class='line' id='LC137'><span class="p">[</span><span class="o">-</span><span class="mf">37.82866875</span><span class="p">,</span> <span class="mf">175.22177625</span><span class="p">,</span> <span class="s2">&quot;563&quot;</span><span class="p">],</span></div><div class='line' id='LC138'><span class="p">[</span><span class="o">-</span><span class="mf">37.8295602</span><span class="p">,</span> <span class="mf">175.21924335</span><span class="p">,</span> <span class="s2">&quot;582&quot;</span><span class="p">],</span></div><div class='line' id='LC139'><span class="p">[</span><span class="o">-</span><span class="mf">37.8304707833</span><span class="p">,</span> <span class="mf">175.2182986167</span><span class="p">,</span> <span class="s2">&quot;590&quot;</span><span class="p">],</span></div><div class='line' id='LC140'><span class="p">[</span><span class="o">-</span><span class="mf">37.83086</span><span class="p">,</span> <span class="mf">175.2180687667</span><span class="p">,</span> <span class="s2">&quot;592&quot;</span><span class="p">],</span></div><div class='line' id='LC141'><span class="p">[</span><span class="o">-</span><span class="mf">37.8328604833</span><span class="p">,</span> <span class="mf">175.2172892167</span><span class="p">,</span> <span class="s2">&quot;618&quot;</span><span class="p">],</span></div><div class='line' id='LC142'><span class="p">[</span><span class="o">-</span><span class="mf">37.8342575667</span><span class="p">,</span> <span class="mf">175.2168357833</span><span class="p">,</span> <span class="s2">&quot;638&quot;</span><span class="p">],</span></div><div class='line' id='LC143'><span class="p">[</span><span class="o">-</span><span class="mf">37.8239713</span><span class="p">,</span> <span class="mf">175.2245693667</span><span class="p">,</span> <span class="s2">&quot;504&quot;</span><span class="p">],</span></div><div class='line' id='LC144'><span class="p">[</span><span class="o">-</span><span class="mf">37.8365260167</span><span class="p">,</span> <span class="mf">175.2170911</span><span class="p">,</span> <span class="s2">&quot;673&quot;</span><span class="p">],</span></div><div class='line' id='LC145'><span class="p">[</span><span class="o">-</span><span class="mf">37.8233928833</span><span class="p">,</span> <span class="mf">175.2249669167</span><span class="p">,</span> <span class="s2">&quot;492&quot;</span><span class="p">],</span></div><div class='line' id='LC146'><span class="p">[</span><span class="o">-</span><span class="mf">37.8248650167</span><span class="p">,</span> <span class="mf">175.2246300833</span><span class="p">,</span> <span class="s2">&quot;509&quot;</span><span class="p">],</span></div><div class='line' id='LC147'><span class="p">[</span><span class="o">-</span><span class="mf">37.8191798333</span><span class="p">,</span> <span class="mf">175.2265331667</span><span class="p">,</span> <span class="s2">&quot;435&quot;</span><span class="p">],</span></div><div class='line' id='LC148'><span class="p">[</span><span class="o">-</span><span class="mf">37.8143243333</span><span class="p">,</span> <span class="mf">175.2310940167</span><span class="p">,</span> <span class="s2">&quot;368&quot;</span><span class="p">],</span></div><div class='line' id='LC149'><span class="p">[</span><span class="o">-</span><span class="mf">37.81459255</span><span class="p">,</span> <span class="mf">175.2320046</span><span class="p">,</span> <span class="s2">&quot;363&quot;</span><span class="p">],</span></div><div class='line' id='LC150'><span class="p">[</span><span class="o">-</span><span class="mf">37.81127515</span><span class="p">,</span> <span class="mf">175.2356499167</span><span class="p">,</span> <span class="s2">&quot;311&quot;</span><span class="p">],</span></div><div class='line' id='LC151'><span class="p">[</span><span class="o">-</span><span class="mf">37.8126359667</span><span class="p">,</span> <span class="mf">175.2340855167</span><span class="p">,</span> <span class="s2">&quot;333&quot;</span><span class="p">],</span></div><div class='line' id='LC152'><span class="p">[</span><span class="o">-</span><span class="mf">37.8096158333</span><span class="p">,</span> <span class="mf">175.2375218167</span><span class="p">,</span> <span class="s2">&quot;293&quot;</span><span class="p">],</span></div><div class='line' id='LC153'><span class="p">[</span><span class="o">-</span><span class="mf">37.8315868667</span><span class="p">,</span> <span class="mf">175.2177722833</span><span class="p">,</span> <span class="s2">&quot;604&quot;</span><span class="p">],</span></div><div class='line' id='LC154'><span class="p">[</span><span class="o">-</span><span class="mf">37.8160177667</span><span class="p">,</span> <span class="mf">175.2299268333</span><span class="p">,</span> <span class="s2">&quot;391&quot;</span><span class="p">],</span></div><div class='line' id='LC155'><span class="p">[</span><span class="o">-</span><span class="mf">37.8204715667</span><span class="p">,</span> <span class="mf">175.2265481833</span><span class="p">,</span> <span class="s2">&quot;456&quot;</span><span class="p">],</span></div><div class='line' id='LC156'><span class="p">[</span><span class="o">-</span><span class="mf">37.8206352</span><span class="p">,</span> <span class="mf">175.2265670333</span><span class="p">,</span> <span class="s2">&quot;458&quot;</span><span class="p">],</span></div><div class='line' id='LC157'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208412667</span><span class="p">,</span> <span class="mf">175.2265323333</span><span class="p">,</span> <span class="s2">&quot;460&quot;</span><span class="p">],</span></div><div class='line' id='LC158'><span class="p">[</span><span class="o">-</span><span class="mf">37.8210184333</span><span class="p">,</span> <span class="mf">175.22648325</span><span class="p">,</span> <span class="s2">&quot;462&quot;</span><span class="p">],</span></div><div class='line' id='LC159'><span class="p">[</span><span class="o">-</span><span class="mf">37.8212643833</span><span class="p">,</span> <span class="mf">175.2270422167</span><span class="p">,</span> <span class="s2">&quot;465&quot;</span><span class="p">],</span></div><div class='line' id='LC160'><span class="p">[</span><span class="o">-</span><span class="mf">37.82119945</span><span class="p">,</span> <span class="mf">175.2264274333</span><span class="p">,</span> <span class="s2">&quot;464&quot;</span><span class="p">],</span></div><div class='line' id='LC161'><span class="p">[</span><span class="o">-</span><span class="mf">37.82136485</span><span class="p">,</span> <span class="mf">175.2263145667</span><span class="p">,</span> <span class="s2">&quot;466&quot;</span><span class="p">],</span></div><div class='line' id='LC162'><span class="p">[</span><span class="o">-</span><span class="mf">37.8215261</span><span class="p">,</span> <span class="mf">175.22684075</span><span class="p">,</span> <span class="s2">&quot;467&quot;</span><span class="p">],</span></div><div class='line' id='LC163'><span class="p">[</span><span class="o">-</span><span class="mf">37.8215301833</span><span class="p">,</span> <span class="mf">175.2262078</span><span class="p">,</span> <span class="s2">&quot;468&quot;</span><span class="p">],</span></div><div class='line' id='LC164'><span class="p">[</span><span class="o">-</span><span class="mf">37.8217701667</span><span class="p">,</span> <span class="mf">175.2266360167</span><span class="p">,</span> <span class="s2">&quot;1/471&quot;</span><span class="p">],</span></div><div class='line' id='LC165'><span class="p">[</span><span class="o">-</span><span class="mf">37.8218376833</span><span class="p">,</span> <span class="mf">175.22686725</span><span class="p">,</span> <span class="s2">&quot;2/471&quot;</span><span class="p">],</span></div><div class='line' id='LC166'><span class="p">[</span><span class="o">-</span><span class="mf">37.8217084667</span><span class="p">,</span> <span class="mf">175.2260839667</span><span class="p">,</span> <span class="s2">&quot;472&quot;</span><span class="p">],</span></div><div class='line' id='LC167'><span class="p">[</span><span class="o">-</span><span class="mf">37.8219782333</span><span class="p">,</span> <span class="mf">175.2265028333</span><span class="p">,</span> <span class="s2">&quot;475&quot;</span><span class="p">],</span></div><div class='line' id='LC168'><span class="p">[</span><span class="o">-</span><span class="mf">37.8218988833</span><span class="p">,</span> <span class="mf">175.2259723</span><span class="p">,</span> <span class="s2">&quot;476&quot;</span><span class="p">],</span></div><div class='line' id='LC169'><span class="p">[</span><span class="o">-</span><span class="mf">37.8223939333</span><span class="p">,</span> <span class="mf">175.2262447</span><span class="p">,</span> <span class="s2">&quot;479&quot;</span><span class="p">],</span></div><div class='line' id='LC170'><span class="p">[</span><span class="o">-</span><span class="mf">37.8223048667</span><span class="p">,</span> <span class="mf">175.2256582833</span><span class="p">,</span> <span class="s2">&quot;480&quot;</span><span class="p">],</span></div><div class='line' id='LC171'><span class="p">[</span><span class="o">-</span><span class="mf">37.8226657</span><span class="p">,</span> <span class="mf">175.2261230833</span><span class="p">,</span> <span class="s2">&quot;481&quot;</span><span class="p">],</span></div><div class='line' id='LC172'><span class="p">[</span><span class="o">-</span><span class="mf">37.8224199</span><span class="p">,</span> <span class="mf">175.2255487833</span><span class="p">,</span> <span class="s2">&quot;482&quot;</span><span class="p">],</span></div><div class='line' id='LC173'><span class="p">[</span><span class="o">-</span><span class="mf">37.8229134167</span><span class="p">,</span> <span class="mf">175.2259527833</span><span class="p">,</span> <span class="s2">&quot;485&quot;</span><span class="p">],</span></div><div class='line' id='LC174'><span class="p">[</span><span class="o">-</span><span class="mf">37.8226937833</span><span class="p">,</span> <span class="mf">175.2253693167</span><span class="p">,</span> <span class="s2">&quot;486&quot;</span><span class="p">],</span></div><div class='line' id='LC175'><span class="p">[</span><span class="o">-</span><span class="mf">37.8231509667</span><span class="p">,</span> <span class="mf">175.2258170333</span><span class="p">,</span> <span class="s2">&quot;487&quot;</span><span class="p">],</span></div><div class='line' id='LC176'><span class="p">[</span><span class="o">-</span><span class="mf">37.82295265</span><span class="p">,</span> <span class="mf">175.2252571167</span><span class="p">,</span> <span class="s2">&quot;488&quot;</span><span class="p">],</span></div><div class='line' id='LC177'><span class="p">[</span><span class="o">-</span><span class="mf">37.8233779</span><span class="p">,</span> <span class="mf">175.2256743833</span><span class="p">,</span> <span class="s2">&quot;489&quot;</span><span class="p">],</span></div><div class='line' id='LC178'><span class="p">[</span><span class="o">-</span><span class="mf">37.8232052667</span><span class="p">,</span> <span class="mf">175.2251109333</span><span class="p">,</span> <span class="s2">&quot;490&quot;</span><span class="p">],</span></div><div class='line' id='LC179'><span class="p">[</span><span class="o">-</span><span class="mf">37.8236200333</span><span class="p">,</span> <span class="mf">175.22553395</span><span class="p">,</span> <span class="s2">&quot;493&quot;</span><span class="p">],</span></div><div class='line' id='LC180'><span class="p">[</span><span class="o">-</span><span class="mf">37.82385775</span><span class="p">,</span> <span class="mf">175.2253390833</span><span class="p">,</span> <span class="s2">&quot;495&quot;</span><span class="p">],</span></div><div class='line' id='LC181'><span class="p">[</span><span class="o">-</span><span class="mf">37.8203220167</span><span class="p">,</span> <span class="mf">175.22650925</span><span class="p">,</span> <span class="s2">&quot;454&quot;</span><span class="p">],</span></div><div class='line' id='LC182'><span class="p">[</span><span class="o">-</span><span class="mf">37.8179795333</span><span class="p">,</span> <span class="mf">175.2262826</span><span class="p">,</span> <span class="s2">&quot;428&quot;</span><span class="p">],</span></div><div class='line' id='LC183'><span class="p">[</span><span class="o">-</span><span class="mf">37.81038215</span><span class="p">,</span> <span class="mf">175.2365298167</span><span class="p">,</span> <span class="s2">&quot;303&quot;</span><span class="p">],</span></div><div class='line' id='LC184'><span class="p">[</span><span class="o">-</span><span class="mf">37.8161746667</span><span class="p">,</span> <span class="mf">175.2297239833</span><span class="p">,</span> <span class="s2">&quot;393&quot;</span><span class="p">],</span></div><div class='line' id='LC185'><span class="p">[</span><span class="o">-</span><span class="mf">37.8083635333</span><span class="p">,</span> <span class="mf">175.233955</span><span class="p">,</span> <span class="s2">&quot;294&quot;</span><span class="p">],</span></div><div class='line' id='LC186'><span class="p">[</span><span class="o">-</span><span class="mf">37.82029495</span><span class="p">,</span> <span class="mf">175.2214968167</span><span class="p">,</span> <span class="s2">&quot;39&quot;</span><span class="p">],</span></div><div class='line' id='LC187'><span class="p">[</span><span class="o">-</span><span class="mf">37.8204754333</span><span class="p">,</span> <span class="mf">175.2247793333</span><span class="p">,</span> <span class="s2">&quot;12B&quot;</span><span class="p">],</span></div><div class='line' id='LC188'><span class="p">[</span><span class="o">-</span><span class="mf">37.8205440833</span><span class="p">,</span> <span class="mf">175.22344905</span><span class="p">,</span> <span class="s2">&quot;23&quot;</span><span class="p">],</span></div><div class='line' id='LC189'><span class="p">[</span><span class="o">-</span><span class="mf">37.8195974333</span><span class="p">,</span> <span class="mf">175.2254019333</span><span class="p">,</span> <span class="s2">&quot;2&quot;</span><span class="p">],</span></div><div class='line' id='LC190'><span class="p">[</span><span class="o">-</span><span class="mf">37.8210801</span><span class="p">,</span> <span class="mf">175.2237748667</span><span class="p">,</span> <span class="s2">&quot;20A&quot;</span><span class="p">],</span></div><div class='line' id='LC191'><span class="p">[</span><span class="o">-</span><span class="mf">37.8209057333</span><span class="p">,</span> <span class="mf">175.22389775</span><span class="p">,</span> <span class="s2">&quot;18&quot;</span><span class="p">],</span></div><div class='line' id='LC192'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208016833</span><span class="p">,</span> <span class="mf">175.2221582833</span><span class="p">,</span> <span class="s2">&quot;32&quot;</span><span class="p">],</span></div><div class='line' id='LC193'><span class="p">[</span><span class="o">-</span><span class="mf">37.8209372667</span><span class="p">,</span> <span class="mf">175.2236919</span><span class="p">,</span> <span class="s2">&quot;20&quot;</span><span class="p">],</span></div><div class='line' id='LC194'><span class="p">[</span><span class="o">-</span><span class="mf">37.8210586833</span><span class="p">,</span> <span class="mf">175.22351925</span><span class="p">,</span> <span class="s2">&quot;22B&quot;</span><span class="p">],</span></div><div class='line' id='LC195'><span class="p">[</span><span class="o">-</span><span class="mf">37.82092905</span><span class="p">,</span> <span class="mf">175.2234855333</span><span class="p">,</span> <span class="s2">&quot;22&quot;</span><span class="p">],</span></div><div class='line' id='LC196'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208587333</span><span class="p">,</span> <span class="mf">175.2231887667</span><span class="p">,</span> <span class="s2">&quot;24&quot;</span><span class="p">],</span></div><div class='line' id='LC197'><span class="p">[</span><span class="o">-</span><span class="mf">37.8210241167</span><span class="p">,</span> <span class="mf">175.2230882</span><span class="p">,</span> <span class="s2">&quot;24B&quot;</span><span class="p">],</span></div><div class='line' id='LC198'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208547833</span><span class="p">,</span> <span class="mf">175.2229410667</span><span class="p">,</span> <span class="s2">&quot;26&quot;</span><span class="p">],</span></div><div class='line' id='LC199'><span class="p">[</span><span class="o">-</span><span class="mf">37.8209917</span><span class="p">,</span> <span class="mf">175.2228447667</span><span class="p">,</span> <span class="s2">&quot;26B&quot;</span><span class="p">],</span></div><div class='line' id='LC200'><span class="p">[</span><span class="o">-</span><span class="mf">37.82097645</span><span class="p">,</span> <span class="mf">175.2227176167</span><span class="p">,</span> <span class="s2">&quot;28B&quot;</span><span class="p">],</span></div><div class='line' id='LC201'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208099167</span><span class="p">,</span> <span class="mf">175.2226765167</span><span class="p">,</span> <span class="s2">&quot;28&quot;</span><span class="p">],</span></div><div class='line' id='LC202'><span class="p">[</span><span class="o">-</span><span class="mf">37.8207666833</span><span class="p">,</span> <span class="mf">175.2224338833</span><span class="p">,</span> <span class="s2">&quot;30&quot;</span><span class="p">],</span></div><div class='line' id='LC203'><span class="p">[</span><span class="o">-</span><span class="mf">37.8209508833</span><span class="p">,</span> <span class="mf">175.2222094167</span><span class="p">,</span> <span class="s2">&quot;32B&quot;</span><span class="p">],</span></div><div class='line' id='LC204'><span class="p">[</span><span class="o">-</span><span class="mf">37.82076515</span><span class="p">,</span> <span class="mf">175.2219195167</span><span class="p">,</span> <span class="s2">&quot;34A&quot;</span><span class="p">],</span></div><div class='line' id='LC205'><span class="p">[</span><span class="o">-</span><span class="mf">37.8207399667</span><span class="p">,</span> <span class="mf">175.2218131667</span><span class="p">,</span> <span class="s2">&quot;34B&quot;</span><span class="p">],</span></div><div class='line' id='LC206'><span class="p">[</span><span class="o">-</span><span class="mf">37.8203075833</span><span class="p">,</span> <span class="mf">175.2240482833</span><span class="p">,</span> <span class="s2">&quot;19&quot;</span><span class="p">],</span></div><div class='line' id='LC207'><span class="p">[</span><span class="o">-</span><span class="mf">37.8205368167</span><span class="p">,</span> <span class="mf">175.2237746667</span><span class="p">,</span> <span class="s2">&quot;21&quot;</span><span class="p">],</span></div><div class='line' id='LC208'><span class="p">[</span><span class="o">-</span><span class="mf">37.8205025833</span><span class="p">,</span> <span class="mf">175.2231658</span><span class="p">,</span> <span class="s2">&quot;25A&quot;</span><span class="p">],</span></div><div class='line' id='LC209'><span class="p">[</span><span class="o">-</span><span class="mf">37.820465</span><span class="p">,</span> <span class="mf">175.2229733667</span><span class="p">,</span> <span class="s2">&quot;27&quot;</span><span class="p">],</span></div><div class='line' id='LC210'><span class="p">[</span><span class="o">-</span><span class="mf">37.82043535</span><span class="p">,</span> <span class="mf">175.2227387</span><span class="p">,</span> <span class="s2">&quot;29&quot;</span><span class="p">],</span></div><div class='line' id='LC211'><span class="p">[</span><span class="o">-</span><span class="mf">37.8204582</span><span class="p">,</span> <span class="mf">175.2225319667</span><span class="p">,</span> <span class="s2">&quot;31&quot;</span><span class="p">],</span></div><div class='line' id='LC212'><span class="p">[</span><span class="o">-</span><span class="mf">37.82024115</span><span class="p">,</span> <span class="mf">175.2224347833</span><span class="p">,</span> <span class="s2">&quot;31B&quot;</span><span class="p">],</span></div><div class='line' id='LC213'><span class="p">[</span><span class="o">-</span><span class="mf">37.8203792333</span><span class="p">,</span> <span class="mf">175.2222631667</span><span class="p">,</span> <span class="s2">&quot;33&quot;</span><span class="p">],</span></div><div class='line' id='LC214'><span class="p">[</span><span class="o">-</span><span class="mf">37.82034095</span><span class="p">,</span> <span class="mf">175.2219843</span><span class="p">,</span> <span class="s2">&quot;35&quot;</span><span class="p">],</span></div><div class='line' id='LC215'><span class="p">[</span><span class="o">-</span><span class="mf">37.8201566167</span><span class="p">,</span> <span class="mf">175.2219446</span><span class="p">,</span> <span class="s2">&quot;35B&quot;</span><span class="p">],</span></div><div class='line' id='LC216'><span class="p">[</span><span class="o">-</span><span class="mf">37.82030575</span><span class="p">,</span> <span class="mf">175.2217594333</span><span class="p">,</span> <span class="s2">&quot;37&quot;</span><span class="p">],</span></div><div class='line' id='LC217'><span class="p">[</span><span class="o">-</span><span class="mf">37.8202966833</span><span class="p">,</span> <span class="mf">175.2233158167</span><span class="p">,</span> <span class="s2">&quot;25&quot;</span><span class="p">],</span></div><div class='line' id='LC218'><span class="p">[</span><span class="o">-</span><span class="mf">37.8192714167</span><span class="p">,</span> <span class="mf">175.2253842667</span><span class="p">,</span> <span class="s2">&quot;1&quot;</span><span class="p">],</span></div><div class='line' id='LC219'><span class="p">[</span><span class="o">-</span><span class="mf">37.81969695</span><span class="p">,</span> <span class="mf">175.22516645</span><span class="p">,</span> <span class="s2">&quot;4&quot;</span><span class="p">],</span></div><div class='line' id='LC220'><span class="p">[</span><span class="o">-</span><span class="mf">37.8194904667</span><span class="p">,</span> <span class="mf">175.22468815</span><span class="p">,</span> <span class="s2">&quot;5&quot;</span><span class="p">],</span></div><div class='line' id='LC221'><span class="p">[</span><span class="o">-</span><span class="mf">37.8198524333</span><span class="p">,</span> <span class="mf">175.2249096667</span><span class="p">,</span> <span class="s2">&quot;6&quot;</span><span class="p">],</span></div><div class='line' id='LC222'><span class="p">[</span><span class="o">-</span><span class="mf">37.8200581833</span><span class="p">,</span> <span class="mf">175.2247122</span><span class="p">,</span> <span class="s2">&quot;8&quot;</span><span class="p">],</span></div><div class='line' id='LC223'><span class="p">[</span><span class="o">-</span><span class="mf">37.8193447</span><span class="p">,</span> <span class="mf">175.2244639667</span><span class="p">,</span> <span class="s2">&quot;5C&quot;</span><span class="p">],</span></div><div class='line' id='LC224'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208238</span><span class="p">,</span> <span class="mf">175.2241340167</span><span class="p">,</span> <span class="s2">&quot;16&quot;</span><span class="p">],</span></div><div class='line' id='LC225'><span class="p">[</span><span class="o">-</span><span class="mf">37.8193183667</span><span class="p">,</span> <span class="mf">175.22515695</span><span class="p">,</span> <span class="s2">&quot;1A&quot;</span><span class="p">],</span></div><div class='line' id='LC226'><span class="p">[</span><span class="o">-</span><span class="mf">37.81940575</span><span class="p">,</span> <span class="mf">175.2249383333</span><span class="p">,</span> <span class="s2">&quot;3&quot;</span><span class="p">],</span></div><div class='line' id='LC227'><span class="p">[</span><span class="o">-</span><span class="mf">37.8211855167</span><span class="p">,</span> <span class="mf">175.2242545333</span><span class="p">,</span> <span class="s2">&quot;18A&quot;</span><span class="p">],</span></div><div class='line' id='LC228'><span class="p">[</span><span class="o">-</span><span class="mf">37.8207094833</span><span class="p">,</span> <span class="mf">175.22430275</span><span class="p">,</span> <span class="s2">&quot;14&quot;</span><span class="p">],</span></div><div class='line' id='LC229'><span class="p">[</span><span class="o">-</span><span class="mf">37.82027725</span><span class="p">,</span> <span class="mf">175.22488135</span><span class="p">,</span> <span class="s2">&quot;10A&quot;</span><span class="p">],</span></div><div class='line' id='LC230'><span class="p">[</span><span class="o">-</span><span class="mf">37.8202305833</span><span class="p">,</span> <span class="mf">175.2245652667</span><span class="p">,</span> <span class="s2">&quot;10&quot;</span><span class="p">],</span></div><div class='line' id='LC231'><span class="p">[</span><span class="o">-</span><span class="mf">37.8205049667</span><span class="p">,</span> <span class="mf">175.2244201333</span><span class="p">,</span> <span class="s2">&quot;12&quot;</span><span class="p">],</span></div><div class='line' id='LC232'><span class="p">[</span><span class="o">-</span><span class="mf">37.8196320333</span><span class="p">,</span> <span class="mf">175.2255586</span><span class="p">,</span> <span class="s2">&quot;22&quot;</span><span class="p">],</span></div><div class='line' id='LC233'><span class="p">[</span><span class="o">-</span><span class="mf">37.8209711</span><span class="p">,</span> <span class="mf">175.2250444667</span><span class="p">,</span> <span class="s2">&quot;8&quot;</span><span class="p">],</span></div><div class='line' id='LC234'><span class="p">[</span><span class="o">-</span><span class="mf">37.82120665</span><span class="p">,</span> <span class="mf">175.2252942833</span><span class="p">,</span> <span class="s2">&quot;5&quot;</span><span class="p">],</span></div><div class='line' id='LC235'><span class="p">[</span><span class="o">-</span><span class="mf">37.8210184</span><span class="p">,</span> <span class="mf">175.2254290333</span><span class="p">,</span> <span class="s2">&quot;7&quot;</span><span class="p">],</span></div><div class='line' id='LC236'><span class="p">[</span><span class="o">-</span><span class="mf">37.8213430333</span><span class="p">,</span> <span class="mf">175.2252086167</span><span class="p">,</span> <span class="s2">&quot;3&quot;</span><span class="p">],</span></div><div class='line' id='LC237'><span class="p">[</span><span class="o">-</span><span class="mf">37.8207887833</span><span class="p">,</span> <span class="mf">175.2251555667</span><span class="p">,</span> <span class="s2">&quot;10&quot;</span><span class="p">],</span></div><div class='line' id='LC238'><span class="p">[</span><span class="o">-</span><span class="mf">37.82060805</span><span class="p">,</span> <span class="mf">175.2257042333</span><span class="p">,</span> <span class="s2">&quot;13&quot;</span><span class="p">],</span></div><div class='line' id='LC239'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208330333</span><span class="p">,</span> <span class="mf">175.22553905</span><span class="p">,</span> <span class="s2">&quot;9&quot;</span><span class="p">],</span></div><div class='line' id='LC240'><span class="p">[</span><span class="o">-</span><span class="mf">37.8216988833</span><span class="p">,</span> <span class="mf">175.2249665667</span><span class="p">,</span> <span class="s2">&quot;1&quot;</span><span class="p">],</span></div><div class='line' id='LC241'><span class="p">[</span><span class="o">-</span><span class="mf">37.8215665833</span><span class="p">,</span> <span class="mf">175.2246573333</span><span class="p">,</span> <span class="s2">&quot;2&quot;</span><span class="p">],</span></div><div class='line' id='LC242'><span class="p">[</span><span class="o">-</span><span class="mf">37.8213729</span><span class="p">,</span> <span class="mf">175.2247789333</span><span class="p">,</span> <span class="s2">&quot;4&quot;</span><span class="p">],</span></div><div class='line' id='LC243'><span class="p">[</span><span class="o">-</span><span class="mf">37.8211700667</span><span class="p">,</span> <span class="mf">175.2249324333</span><span class="p">,</span> <span class="s2">&quot;6&quot;</span><span class="p">],</span></div><div class='line' id='LC244'><span class="p">[</span><span class="o">-</span><span class="mf">37.8205967667</span><span class="p">,</span> <span class="mf">175.2252867</span><span class="p">,</span> <span class="s2">&quot;12&quot;</span><span class="p">],</span></div><div class='line' id='LC245'><span class="p">[</span><span class="o">-</span><span class="mf">37.8204008833</span><span class="p">,</span> <span class="mf">175.2254234667</span><span class="p">,</span> <span class="s2">&quot;14&quot;</span><span class="p">],</span></div><div class='line' id='LC246'><span class="p">[</span><span class="o">-</span><span class="mf">37.82043265</span><span class="p">,</span> <span class="mf">175.22582195</span><span class="p">,</span> <span class="s2">&quot;15&quot;</span><span class="p">],</span></div><div class='line' id='LC247'><span class="p">[</span><span class="o">-</span><span class="mf">37.8202037333</span><span class="p">,</span> <span class="mf">175.2255415833</span><span class="p">,</span> <span class="s2">&quot;16&quot;</span><span class="p">],</span></div><div class='line' id='LC248'><span class="p">[</span><span class="o">-</span><span class="mf">37.8200154333</span><span class="p">,</span> <span class="mf">175.2256547667</span><span class="p">,</span> <span class="s2">&quot;18&quot;</span><span class="p">],</span></div><div class='line' id='LC249'><span class="p">[</span><span class="o">-</span><span class="mf">37.8197443167</span><span class="p">,</span> <span class="mf">175.2256164833</span><span class="p">,</span> <span class="s2">&quot;20&quot;</span><span class="p">],</span></div><div class='line' id='LC250'><span class="p">[</span><span class="o">-</span><span class="mf">37.8202814333</span><span class="p">,</span> <span class="mf">175.22590955</span><span class="p">,</span> <span class="s2">&quot;17&quot;</span><span class="p">],</span></div><div class='line' id='LC251'><span class="p">[</span><span class="o">-</span><span class="mf">37.8202967667</span><span class="p">,</span> <span class="mf">175.21462555</span><span class="p">,</span> <span class="s2">&quot;98&quot;</span><span class="p">],</span></div><div class='line' id='LC252'><span class="p">[</span><span class="o">-</span><span class="mf">37.82204485</span><span class="p">,</span> <span class="mf">175.21819735</span><span class="p">,</span> <span class="s2">&quot;61B&quot;</span><span class="p">],</span></div><div class='line' id='LC253'><span class="p">[</span><span class="o">-</span><span class="mf">37.8224241</span><span class="p">,</span> <span class="mf">175.2179326667</span><span class="p">,</span> <span class="s2">&quot;61C&quot;</span><span class="p">],</span></div><div class='line' id='LC254'><span class="p">[</span><span class="o">-</span><span class="mf">37.8215043167</span><span class="p">,</span> <span class="mf">175.2227943833</span><span class="p">,</span> <span class="s2">&quot;24&quot;</span><span class="p">],</span></div><div class='line' id='LC255'><span class="p">[</span><span class="o">-</span><span class="mf">37.8219082</span><span class="p">,</span> <span class="mf">175.2255408167</span><span class="p">,</span> <span class="s2">&quot;8&quot;</span><span class="p">],</span></div><div class='line' id='LC256'><span class="p">[</span><span class="o">-</span><span class="mf">37.8216963</span><span class="p">,</span> <span class="mf">175.2240856667</span><span class="p">,</span> <span class="s2">&quot;14&quot;</span><span class="p">],</span></div><div class='line' id='LC257'><span class="p">[</span><span class="o">-</span><span class="mf">37.8213418333</span><span class="p">,</span> <span class="mf">175.2188135667</span><span class="p">,</span> <span class="s2">&quot;55&quot;</span><span class="p">],</span></div><div class='line' id='LC258'><span class="p">[</span><span class="o">-</span><span class="mf">37.8204966333</span><span class="p">,</span> <span class="mf">175.2183406333</span><span class="p">,</span> <span class="s2">&quot;54A&quot;</span><span class="p">],</span></div><div class='line' id='LC259'><span class="p">[</span><span class="o">-</span><span class="mf">37.8221799833</span><span class="p">,</span> <span class="mf">175.21122085</span><span class="p">,</span> <span class="s2">&quot;139&quot;</span><span class="p">],</span></div><div class='line' id='LC260'><span class="p">[</span><span class="o">-</span><span class="mf">37.8217387</span><span class="p">,</span> <span class="mf">175.22431625</span><span class="p">,</span> <span class="s2">&quot;12&quot;</span><span class="p">],</span></div><div class='line' id='LC261'><span class="p">[</span><span class="o">-</span><span class="mf">37.8218650167</span><span class="p">,</span> <span class="mf">175.2149734167</span><span class="p">,</span> <span class="s2">&quot;107&quot;</span><span class="p">],</span></div><div class='line' id='LC262'><span class="p">[</span><span class="o">-</span><span class="mf">37.8214083333</span><span class="p">,</span> <span class="mf">175.2220152667</span><span class="p">,</span> <span class="s2">&quot;30&quot;</span><span class="p">],</span></div><div class='line' id='LC263'><span class="p">[</span><span class="o">-</span><span class="mf">37.8213738333</span><span class="p">,</span> <span class="mf">175.2217301</span><span class="p">,</span> <span class="s2">&quot;32&quot;</span><span class="p">],</span></div><div class='line' id='LC264'><span class="p">[</span><span class="o">-</span><span class="mf">37.8221598167</span><span class="p">,</span> <span class="mf">175.2247839333</span><span class="p">,</span> <span class="s2">&quot;9&quot;</span><span class="p">],</span></div><div class='line' id='LC265'><span class="p">[</span><span class="o">-</span><span class="mf">37.8216356</span><span class="p">,</span> <span class="mf">175.2235610667</span><span class="p">,</span> <span class="s2">&quot;18&quot;</span><span class="p">],</span></div><div class='line' id='LC266'><span class="p">[</span><span class="o">-</span><span class="mf">37.8212188167</span><span class="p">,</span> <span class="mf">175.2221387333</span><span class="p">,</span> <span class="s2">&quot;30B&quot;</span><span class="p">],</span></div><div class='line' id='LC267'><span class="p">[</span><span class="o">-</span><span class="mf">37.8200466667</span><span class="p">,</span> <span class="mf">175.2166111</span><span class="p">,</span> <span class="s2">&quot;84A&quot;</span><span class="p">],</span></div><div class='line' id='LC268'><span class="p">[</span><span class="o">-</span><span class="mf">37.8216679333</span><span class="p">,</span> <span class="mf">175.2238393333</span><span class="p">,</span> <span class="s2">&quot;16&quot;</span><span class="p">],</span></div><div class='line' id='LC269'><span class="p">[</span><span class="o">-</span><span class="mf">37.8211582833</span><span class="p">,</span> <span class="mf">175.22031685</span><span class="p">,</span> <span class="s2">&quot;34&quot;</span><span class="p">],</span></div><div class='line' id='LC270'><span class="p">[</span><span class="o">-</span><span class="mf">37.8221918667</span><span class="p">,</span> <span class="mf">175.2250378333</span><span class="p">,</span> <span class="s2">&quot;7&quot;</span><span class="p">],</span></div><div class='line' id='LC271'><span class="p">[</span><span class="o">-</span><span class="mf">37.8187410167</span><span class="p">,</span> <span class="mf">175.2067290167</span><span class="p">,</span> <span class="s2">&quot;170C&quot;</span><span class="p">],</span></div><div class='line' id='LC272'><span class="p">[</span><span class="o">-</span><span class="mf">37.8206532</span><span class="p">,</span> <span class="mf">175.2170745667</span><span class="p">,</span> <span class="s2">&quot;81&quot;</span><span class="p">],</span></div><div class='line' id='LC273'><span class="p">[</span><span class="o">-</span><span class="mf">37.8212348667</span><span class="p">,</span> <span class="mf">175.2181024167</span><span class="p">,</span> <span class="s2">&quot;67&quot;</span><span class="p">],</span></div><div class='line' id='LC274'><span class="p">[</span><span class="o">-</span><span class="mf">37.8213057667</span><span class="p">,</span> <span class="mf">175.2185351167</span><span class="p">,</span> <span class="s2">&quot;57&quot;</span><span class="p">],</span></div><div class='line' id='LC275'><span class="p">[</span><span class="o">-</span><span class="mf">37.8214571</span><span class="p">,</span> <span class="mf">175.2145877333</span><span class="p">,</span> <span class="s2">&quot;110&quot;</span><span class="p">],</span></div><div class='line' id='LC276'><span class="p">[</span><span class="o">-</span><span class="mf">37.82207085</span><span class="p">,</span> <span class="mf">175.2136727167</span><span class="p">,</span> <span class="s2">&quot;121&quot;</span><span class="p">],</span></div><div class='line' id='LC277'><span class="p">[</span><span class="o">-</span><span class="mf">37.82190125</span><span class="p">,</span> <span class="mf">175.2123493</span><span class="p">,</span> <span class="s2">&quot;130&quot;</span><span class="p">],</span></div><div class='line' id='LC278'><span class="p">[</span><span class="o">-</span><span class="mf">37.8207519667</span><span class="p">,</span> <span class="mf">175.2102467333</span><span class="p">,</span> <span class="s2">&quot;150&quot;</span><span class="p">],</span></div><div class='line' id='LC279'><span class="p">[</span><span class="o">-</span><span class="mf">37.8212159</span><span class="p">,</span> <span class="mf">175.2096407</span><span class="p">,</span> <span class="s2">&quot;159&quot;</span><span class="p">],</span></div><div class='line' id='LC280'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208313833</span><span class="p">,</span> <span class="mf">175.2067756</span><span class="p">,</span> <span class="s2">&quot;172&quot;</span><span class="p">],</span></div><div class='line' id='LC281'><span class="p">[</span><span class="o">-</span><span class="mf">37.8214413333</span><span class="p">,</span> <span class="mf">175.2222779833</span><span class="p">,</span> <span class="s2">&quot;28&quot;</span><span class="p">],</span></div><div class='line' id='LC282'><span class="p">[</span><span class="o">-</span><span class="mf">37.8206921333</span><span class="p">,</span> <span class="mf">175.2182549</span><span class="p">,</span> <span class="s2">&quot;54&quot;</span><span class="p">],</span></div><div class='line' id='LC283'><span class="p">[</span><span class="o">-</span><span class="mf">37.82043975</span><span class="p">,</span> <span class="mf">175.2181215</span><span class="p">,</span> <span class="s2">&quot;56&quot;</span><span class="p">],</span></div><div class='line' id='LC284'><span class="p">[</span><span class="o">-</span><span class="mf">37.8218791</span><span class="p">,</span> <span class="mf">175.2252452167</span><span class="p">,</span> <span class="s2">&quot;10&quot;</span><span class="p">],</span></div><div class='line' id='LC285'><span class="p">[</span><span class="o">-</span><span class="mf">37.82029435</span><span class="p">,</span> <span class="mf">175.2169818</span><span class="p">,</span> <span class="s2">&quot;84&quot;</span><span class="p">],</span></div><div class='line' id='LC286'><span class="p">[</span><span class="o">-</span><span class="mf">37.8215885167</span><span class="p">,</span> <span class="mf">175.22308725</span><span class="p">,</span> <span class="s2">&quot;22&quot;</span><span class="p">],</span></div><div class='line' id='LC287'><span class="p">[</span><span class="o">-</span><span class="mf">37.8215897333</span><span class="p">,</span> <span class="mf">175.2233113167</span><span class="p">,</span> <span class="s2">&quot;20&quot;</span><span class="p">],</span></div><div class='line' id='LC288'><span class="p">[</span><span class="o">-</span><span class="mf">37.82167455</span><span class="p">,</span> <span class="mf">175.2183345</span><span class="p">,</span> <span class="s2">&quot;61A&quot;</span><span class="p">],</span></div><div class='line' id='LC289'><span class="p">[</span><span class="o">-</span><span class="mf">37.8217164667</span><span class="p">,</span> <span class="mf">175.2179857333</span><span class="p">,</span> <span class="s2">&quot;63&quot;</span><span class="p">],</span></div><div class='line' id='LC290'><span class="p">[</span><span class="o">-</span><span class="mf">37.82147385</span><span class="p">,</span> <span class="mf">175.22253565</span><span class="p">,</span> <span class="s2">&quot;26&quot;</span><span class="p">],</span></div><div class='line' id='LC291'><span class="p">[</span><span class="o">-</span><span class="mf">37.8206765333</span><span class="p">,</span> <span class="mf">175.2160304333</span><span class="p">,</span> <span class="s2">&quot;86&quot;</span><span class="p">],</span></div><div class='line' id='LC292'><span class="p">[</span><span class="o">-</span><span class="mf">37.8188941</span><span class="p">,</span> <span class="mf">175.2069437</span><span class="p">,</span> <span class="s2">&quot;170A&quot;</span><span class="p">],</span></div><div class='line' id='LC293'><span class="p">[</span><span class="o">-</span><span class="mf">37.8188068333</span><span class="p">,</span> <span class="mf">175.2068104833</span><span class="p">,</span> <span class="s2">&quot;170B&quot;</span><span class="p">],</span></div><div class='line' id='LC294'><span class="p">[</span><span class="o">-</span><span class="mf">37.8193742667</span><span class="p">,</span> <span class="mf">175.2085580333</span><span class="p">,</span> <span class="s2">&quot;170&quot;</span><span class="p">],</span></div><div class='line' id='LC295'><span class="p">[</span><span class="o">-</span><span class="mf">37.8214388167</span><span class="p">,</span> <span class="mf">175.2200072</span><span class="p">,</span> <span class="s2">&quot;45&quot;</span><span class="p">],</span></div><div class='line' id='LC296'><span class="p">[</span><span class="o">-</span><span class="mf">37.8209547167</span><span class="p">,</span> <span class="mf">175.2157149167</span><span class="p">,</span> <span class="s2">&quot;92&quot;</span><span class="p">],</span></div><div class='line' id='LC297'><span class="p">[</span><span class="o">-</span><span class="mf">37.82088565</span><span class="p">,</span> <span class="mf">175.2164849333</span><span class="p">,</span> <span class="s2">&quot;85&quot;</span><span class="p">],</span></div><div class='line' id='LC298'><span class="p">[</span><span class="o">-</span><span class="mf">37.82136235</span><span class="p">,</span> <span class="mf">175.2159546667</span><span class="p">,</span> <span class="s2">&quot;97&quot;</span><span class="p">],</span></div><div class='line' id='LC299'><span class="p">[</span><span class="o">-</span><span class="mf">37.8219607333</span><span class="p">,</span> <span class="mf">175.2232987</span><span class="p">,</span> <span class="s2">&quot;19&quot;</span><span class="p">],</span></div><div class='line' id='LC300'><span class="p">[</span><span class="o">-</span><span class="mf">37.8210501</span><span class="p">,</span> <span class="mf">175.2179753833</span><span class="p">,</span> <span class="s2">&quot;69&quot;</span><span class="p">],</span></div><div class='line' id='LC301'><span class="p">[</span><span class="o">-</span><span class="mf">37.8212466667</span><span class="p">,</span> <span class="mf">175.2222175833</span><span class="p">,</span> <span class="s2">&quot;28A&quot;</span><span class="p">],</span></div><div class='line' id='LC302'><span class="p">[</span><span class="o">-</span><span class="mf">37.8213836167</span><span class="p">,</span> <span class="mf">175.22300555</span><span class="p">,</span> <span class="s2">&quot;22A&quot;</span><span class="p">],</span></div><div class='line' id='LC303'><span class="p">[</span><span class="o">-</span><span class="mf">37.821339</span><span class="p">,</span> <span class="mf">175.2227439167</span><span class="p">,</span> <span class="s2">&quot;24A&quot;</span><span class="p">],</span></div><div class='line' id='LC304'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208144333</span><span class="p">,</span> <span class="mf">175.2173117167</span><span class="p">,</span> <span class="s2">&quot;77&quot;</span><span class="p">],</span></div><div class='line' id='LC305'><span class="p">[</span><span class="o">-</span><span class="mf">37.8189363667</span><span class="p">,</span> <span class="mf">175.2211582333</span><span class="p">,</span> <span class="s2">&quot;25&quot;</span><span class="p">],</span></div><div class='line' id='LC306'><span class="p">[</span><span class="o">-</span><span class="mf">37.8196676167</span><span class="p">,</span> <span class="mf">175.2209947333</span><span class="p">,</span> <span class="s2">&quot;26B&quot;</span><span class="p">],</span></div><div class='line' id='LC307'><span class="p">[</span><span class="o">-</span><span class="mf">37.8194113</span><span class="p">,</span> <span class="mf">175.2211991</span><span class="p">,</span> <span class="s2">&quot;26&quot;</span><span class="p">],</span></div><div class='line' id='LC308'><span class="p">[</span><span class="o">-</span><span class="mf">37.81883205</span><span class="p">,</span> <span class="mf">175.2209747</span><span class="p">,</span> <span class="s2">&quot;27&quot;</span><span class="p">],</span></div><div class='line' id='LC309'><span class="p">[</span><span class="o">-</span><span class="mf">37.8186925833</span><span class="p">,</span> <span class="mf">175.2207728833</span><span class="p">,</span> <span class="s2">&quot;29&quot;</span><span class="p">],</span></div><div class='line' id='LC310'><span class="p">[</span><span class="o">-</span><span class="mf">37.8199931833</span><span class="p">,</span> <span class="mf">175.2240802167</span><span class="p">,</span> <span class="s2">&quot;2&quot;</span><span class="p">],</span></div><div class='line' id='LC311'><span class="p">[</span><span class="o">-</span><span class="mf">37.8191759333</span><span class="p">,</span> <span class="mf">175.2208279333</span><span class="p">,</span> <span class="s2">&quot;30&quot;</span><span class="p">],</span></div><div class='line' id='LC312'><span class="p">[</span><span class="o">-</span><span class="mf">37.81835395</span><span class="p">,</span> <span class="mf">175.2196571667</span><span class="p">,</span> <span class="s2">&quot;39&quot;</span><span class="p">],</span></div><div class='line' id='LC313'><span class="p">[</span><span class="o">-</span><span class="mf">37.8198807333</span><span class="p">,</span> <span class="mf">175.2235938167</span><span class="p">,</span> <span class="s2">&quot;6&quot;</span><span class="p">],</span></div><div class='line' id='LC314'><span class="p">[</span><span class="o">-</span><span class="mf">37.8194567833</span><span class="p">,</span> <span class="mf">175.22349015</span><span class="p">,</span> <span class="s2">&quot;7&quot;</span><span class="p">],</span></div><div class='line' id='LC315'><span class="p">[</span><span class="o">-</span><span class="mf">37.8200507833</span><span class="p">,</span> <span class="mf">175.21933875</span><span class="p">,</span> <span class="s2">&quot;58&quot;</span><span class="p">],</span></div><div class='line' id='LC316'><span class="p">[</span><span class="o">-</span><span class="mf">37.8197902167</span><span class="p">,</span> <span class="mf">175.2182408</span><span class="p">,</span> <span class="s2">&quot;59A&quot;</span><span class="p">],</span></div><div class='line' id='LC317'><span class="p">[</span><span class="o">-</span><span class="mf">37.81991635</span><span class="p">,</span> <span class="mf">175.21797195</span><span class="p">,</span> <span class="s2">&quot;59B&quot;</span><span class="p">],</span></div><div class='line' id='LC318'><span class="p">[</span><span class="o">-</span><span class="mf">37.8198223833</span><span class="p">,</span> <span class="mf">175.2179361833</span><span class="p">,</span> <span class="s2">&quot;59C&quot;</span><span class="p">],</span></div><div class='line' id='LC319'><span class="p">[</span><span class="o">-</span><span class="mf">37.8201049333</span><span class="p">,</span> <span class="mf">175.2197347167</span><span class="p">,</span> <span class="s2">&quot;60&quot;</span><span class="p">],</span></div><div class='line' id='LC320'><span class="p">[</span><span class="o">-</span><span class="mf">37.8199380333</span><span class="p">,</span> <span class="mf">175.21836645</span><span class="p">,</span> <span class="s2">&quot;61A&quot;</span><span class="p">],</span></div><div class='line' id='LC321'><span class="p">[</span><span class="o">-</span><span class="mf">37.82003775</span><span class="p">,</span> <span class="mf">175.2182443833</span><span class="p">,</span> <span class="s2">&quot;61B&quot;</span><span class="p">],</span></div><div class='line' id='LC322'><span class="p">[</span><span class="o">-</span><span class="mf">37.8200944167</span><span class="p">,</span> <span class="mf">175.21803015</span><span class="p">,</span> <span class="s2">&quot;61C&quot;</span><span class="p">],</span></div><div class='line' id='LC323'><span class="p">[</span><span class="o">-</span><span class="mf">37.8201259667</span><span class="p">,</span> <span class="mf">175.2185610667</span><span class="p">,</span> <span class="s2">&quot;63&quot;</span><span class="p">],</span></div><div class='line' id='LC324'><span class="p">[</span><span class="o">-</span><span class="mf">37.82026275</span><span class="p">,</span> <span class="mf">175.2188001167</span><span class="p">,</span> <span class="s2">&quot;65&quot;</span><span class="p">],</span></div><div class='line' id='LC325'><span class="p">[</span><span class="o">-</span><span class="mf">37.8188917833</span><span class="p">,</span> <span class="mf">175.2203729333</span><span class="p">,</span> <span class="s2">&quot;34&quot;</span><span class="p">],</span></div><div class='line' id='LC326'><span class="p">[</span><span class="o">-</span><span class="mf">37.8184921333</span><span class="p">,</span> <span class="mf">175.2203832</span><span class="p">,</span> <span class="s2">&quot;33&quot;</span><span class="p">],</span></div><div class='line' id='LC327'><span class="p">[</span><span class="o">-</span><span class="mf">37.8190387167</span><span class="p">,</span> <span class="mf">175.2206181333</span><span class="p">,</span> <span class="s2">&quot;32&quot;</span><span class="p">],</span></div><div class='line' id='LC328'><span class="p">[</span><span class="o">-</span><span class="mf">37.81968705</span><span class="p">,</span> <span class="mf">175.2224253667</span><span class="p">,</span> <span class="s2">&quot;16&quot;</span><span class="p">],</span></div><div class='line' id='LC329'><span class="p">[</span><span class="o">-</span><span class="mf">37.81981205</span><span class="p">,</span> <span class="mf">175.223119</span><span class="p">,</span> <span class="s2">&quot;10&quot;</span><span class="p">],</span></div><div class='line' id='LC330'><span class="p">[</span><span class="o">-</span><span class="mf">37.8193882833</span><span class="p">,</span> <span class="mf">175.2229798333</span><span class="p">,</span> <span class="s2">&quot;11&quot;</span><span class="p">],</span></div><div class='line' id='LC331'><span class="p">[</span><span class="o">-</span><span class="mf">37.8190901167</span><span class="p">,</span> <span class="mf">175.2227829833</span><span class="p">,</span> <span class="s2">&quot;13B&quot;</span><span class="p">],</span></div><div class='line' id='LC332'><span class="p">[</span><span class="o">-</span><span class="mf">37.8193593</span><span class="p">,</span> <span class="mf">175.2227247833</span><span class="p">,</span> <span class="s2">&quot;13&quot;</span><span class="p">],</span></div><div class='line' id='LC333'><span class="p">[</span><span class="o">-</span><span class="mf">37.81993935</span><span class="p">,</span> <span class="mf">175.2226893333</span><span class="p">,</span> <span class="s2">&quot;14B&quot;</span><span class="p">],</span></div><div class='line' id='LC334'><span class="p">[</span><span class="o">-</span><span class="mf">37.81842725</span><span class="p">,</span> <span class="mf">175.2201474167</span><span class="p">,</span> <span class="s2">&quot;35&quot;</span><span class="p">],</span></div><div class='line' id='LC335'><span class="p">[</span><span class="o">-</span><span class="mf">37.8187965833</span><span class="p">,</span> <span class="mf">175.2200475333</span><span class="p">,</span> <span class="s2">&quot;36&quot;</span><span class="p">],</span></div><div class='line' id='LC336'><span class="p">[</span><span class="o">-</span><span class="mf">37.8183878167</span><span class="p">,</span> <span class="mf">175.2198735667</span><span class="p">,</span> <span class="s2">&quot;37&quot;</span><span class="p">],</span></div><div class='line' id='LC337'><span class="p">[</span><span class="o">-</span><span class="mf">37.8188702167</span><span class="p">,</span> <span class="mf">175.2196982333</span><span class="p">,</span> <span class="s2">&quot;38B&quot;</span><span class="p">],</span></div><div class='line' id='LC338'><span class="p">[</span><span class="o">-</span><span class="mf">37.82027885</span><span class="p">,</span> <span class="mf">175.2209890667</span><span class="p">,</span> <span class="s2">&quot;82&quot;</span><span class="p">],</span></div><div class='line' id='LC339'><span class="p">[</span><span class="o">-</span><span class="mf">37.8199839667</span><span class="p">,</span> <span class="mf">175.2190668</span><span class="p">,</span> <span class="s2">&quot;56&quot;</span><span class="p">],</span></div><div class='line' id='LC340'><span class="p">[</span><span class="o">-</span><span class="mf">37.8187008333</span><span class="p">,</span> <span class="mf">175.21973745</span><span class="p">,</span> <span class="s2">&quot;38A&quot;</span><span class="p">],</span></div><div class='line' id='LC341'><span class="p">[</span><span class="o">-</span><span class="mf">37.8196820167</span><span class="p">,</span> <span class="mf">175.22262455</span><span class="p">,</span> <span class="s2">&quot;14&quot;</span><span class="p">],</span></div><div class='line' id='LC342'><span class="p">[</span><span class="o">-</span><span class="mf">37.8186528333</span><span class="p">,</span> <span class="mf">175.2191018</span><span class="p">,</span> <span class="s2">&quot;42&quot;</span><span class="p">],</span></div><div class='line' id='LC343'><span class="p">[</span><span class="o">-</span><span class="mf">37.8182912167</span><span class="p">,</span> <span class="mf">175.21915535</span><span class="p">,</span> <span class="s2">&quot;43&quot;</span><span class="p">],</span></div><div class='line' id='LC344'><span class="p">[</span><span class="o">-</span><span class="mf">37.81870525</span><span class="p">,</span> <span class="mf">175.21945675</span><span class="p">,</span> <span class="s2">&quot;40&quot;</span><span class="p">],</span></div><div class='line' id='LC345'><span class="p">[</span><span class="o">-</span><span class="mf">37.8195044333</span><span class="p">,</span> <span class="mf">175.2214081833</span><span class="p">,</span> <span class="s2">&quot;24&quot;</span><span class="p">],</span></div><div class='line' id='LC346'><span class="p">[</span><span class="o">-</span><span class="mf">37.81857075</span><span class="p">,</span> <span class="mf">175.2205925167</span><span class="p">,</span> <span class="s2">&quot;31&quot;</span><span class="p">],</span></div><div class='line' id='LC347'><span class="p">[</span><span class="o">-</span><span class="mf">37.8195656167</span><span class="p">,</span> <span class="mf">175.2181396</span><span class="p">,</span> <span class="s2">&quot;57&quot;</span><span class="p">],</span></div><div class='line' id='LC348'><span class="p">[</span><span class="o">-</span><span class="mf">37.8198411667</span><span class="p">,</span> <span class="mf">175.2213911167</span><span class="p">,</span> <span class="s2">&quot;24A&quot;</span><span class="p">],</span></div><div class='line' id='LC349'><span class="p">[</span><span class="o">-</span><span class="mf">37.8195851667</span><span class="p">,</span> <span class="mf">175.2240869667</span><span class="p">,</span> <span class="s2">&quot;3&quot;</span><span class="p">],</span></div><div class='line' id='LC350'><span class="p">[</span><span class="o">-</span><span class="mf">37.8192829167</span><span class="p">,</span> <span class="mf">175.2239720167</span><span class="p">,</span> <span class="s2">&quot;3A&quot;</span><span class="p">],</span></div><div class='line' id='LC351'><span class="p">[</span><span class="o">-</span><span class="mf">37.8193257</span><span class="p">,</span> <span class="mf">175.2224725667</span><span class="p">,</span> <span class="s2">&quot;15&quot;</span><span class="p">],</span></div><div class='line' id='LC352'><span class="p">[</span><span class="o">-</span><span class="mf">37.8197290167</span><span class="p">,</span> <span class="mf">175.2224129833</span><span class="p">,</span> <span class="s2">&quot;16A&quot;</span><span class="p">],</span></div><div class='line' id='LC353'><span class="p">[</span><span class="o">-</span><span class="mf">37.8196499333</span><span class="p">,</span> <span class="mf">175.2221262667</span><span class="p">,</span> <span class="s2">&quot;18&quot;</span><span class="p">],</span></div><div class='line' id='LC354'><span class="p">[</span><span class="o">-</span><span class="mf">37.8196755333</span><span class="p">,</span> <span class="mf">175.2243193333</span><span class="p">,</span> <span class="s2">&quot;1&quot;</span><span class="p">],</span></div><div class='line' id='LC355'><span class="p">[</span><span class="o">-</span><span class="mf">37.8192091667</span><span class="p">,</span> <span class="mf">175.22166805</span><span class="p">,</span> <span class="s2">&quot;21&quot;</span><span class="p">],</span></div><div class='line' id='LC356'><span class="p">[</span><span class="o">-</span><span class="mf">37.81957585</span><span class="p">,</span> <span class="mf">175.22166585</span><span class="p">,</span> <span class="s2">&quot;22&quot;</span><span class="p">],</span></div><div class='line' id='LC357'><span class="p">[</span><span class="o">-</span><span class="mf">37.8199106833</span><span class="p">,</span> <span class="mf">175.2238436</span><span class="p">,</span> <span class="s2">&quot;4&quot;</span><span class="p">],</span></div><div class='line' id='LC358'><span class="p">[</span><span class="o">-</span><span class="mf">37.81953715</span><span class="p">,</span> <span class="mf">175.22372785</span><span class="p">,</span> <span class="s2">&quot;5A&quot;</span><span class="p">],</span></div><div class='line' id='LC359'><span class="p">[</span><span class="o">-</span><span class="mf">37.8193377833</span><span class="p">,</span> <span class="mf">175.22378105</span><span class="p">,</span> <span class="s2">&quot;5&quot;</span><span class="p">],</span></div><div class='line' id='LC360'><span class="p">[</span><span class="o">-</span><span class="mf">37.8189702833</span><span class="p">,</span> <span class="mf">175.2184597333</span><span class="p">,</span> <span class="s2">&quot;46&quot;</span><span class="p">],</span></div><div class='line' id='LC361'><span class="p">[</span><span class="o">-</span><span class="mf">37.8185876167</span><span class="p">,</span> <span class="mf">175.21821495</span><span class="p">,</span> <span class="s2">&quot;47A&quot;</span><span class="p">],</span></div><div class='line' id='LC362'><span class="p">[</span><span class="o">-</span><span class="mf">37.8185706333</span><span class="p">,</span> <span class="mf">175.2178869167</span><span class="p">,</span> <span class="s2">&quot;47B&quot;</span><span class="p">],</span></div><div class='line' id='LC363'><span class="p">[</span><span class="o">-</span><span class="mf">37.8191945667</span><span class="p">,</span> <span class="mf">175.21845965</span><span class="p">,</span> <span class="s2">&quot;48&quot;</span><span class="p">],</span></div><div class='line' id='LC364'><span class="p">[</span><span class="o">-</span><span class="mf">37.8188482167</span><span class="p">,</span> <span class="mf">175.2176680833</span><span class="p">,</span> <span class="s2">&quot;49&quot;</span><span class="p">],</span></div><div class='line' id='LC365'><span class="p">[</span><span class="o">-</span><span class="mf">37.8194043667</span><span class="p">,</span> <span class="mf">175.21852395</span><span class="p">,</span> <span class="s2">&quot;50&quot;</span><span class="p">],</span></div><div class='line' id='LC366'><span class="p">[</span><span class="o">-</span><span class="mf">37.8196233333</span><span class="p">,</span> <span class="mf">175.2186248333</span><span class="p">,</span> <span class="s2">&quot;52&quot;</span><span class="p">],</span></div><div class='line' id='LC367'><span class="p">[</span><span class="o">-</span><span class="mf">37.81920055</span><span class="p">,</span> <span class="mf">175.2179787167</span><span class="p">,</span> <span class="s2">&quot;53&quot;</span><span class="p">],</span></div><div class='line' id='LC368'><span class="p">[</span><span class="o">-</span><span class="mf">37.8198255</span><span class="p">,</span> <span class="mf">175.2188011167</span><span class="p">,</span> <span class="s2">&quot;54&quot;</span><span class="p">],</span></div><div class='line' id='LC369'><span class="p">[</span><span class="o">-</span><span class="mf">37.8205994333</span><span class="p">,</span> <span class="mf">175.2207248667</span><span class="p">,</span> <span class="s2">&quot;81&quot;</span><span class="p">],</span></div><div class='line' id='LC370'><span class="p">[</span><span class="o">-</span><span class="mf">37.8193045333</span><span class="p">,</span> <span class="mf">175.2222075667</span><span class="p">,</span> <span class="s2">&quot;17&quot;</span><span class="p">],</span></div><div class='line' id='LC371'><span class="p">[</span><span class="o">-</span><span class="mf">37.8205621167</span><span class="p">,</span> <span class="mf">175.2204520167</span><span class="p">,</span> <span class="s2">&quot;79&quot;</span><span class="p">],</span></div><div class='line' id='LC372'><span class="p">[</span><span class="o">-</span><span class="mf">37.8180799333</span><span class="p">,</span> <span class="mf">175.2194407</span><span class="p">,</span> <span class="s2">&quot;41A&quot;</span><span class="p">],</span></div><div class='line' id='LC373'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208301833</span><span class="p">,</span> <span class="mf">175.2206735833</span><span class="p">,</span> <span class="s2">&quot;81A&quot;</span><span class="p">],</span></div><div class='line' id='LC374'><span class="p">[</span><span class="o">-</span><span class="mf">37.8202558</span><span class="p">,</span> <span class="mf">175.2206809333</span><span class="p">,</span> <span class="s2">&quot;80&quot;</span><span class="p">],</span></div><div class='line' id='LC375'><span class="p">[</span><span class="o">-</span><span class="mf">37.81941275</span><span class="p">,</span> <span class="mf">175.21804965</span><span class="p">,</span> <span class="s2">&quot;55&quot;</span><span class="p">],</span></div><div class='line' id='LC376'><span class="p">[</span><span class="o">-</span><span class="mf">37.8190239</span><span class="p">,</span> <span class="mf">175.2179808833</span><span class="p">,</span> <span class="s2">&quot;51&quot;</span><span class="p">],</span></div><div class='line' id='LC377'><span class="p">[</span><span class="o">-</span><span class="mf">37.8187854</span><span class="p">,</span> <span class="mf">175.2180712167</span><span class="p">,</span> <span class="s2">&quot;47&quot;</span><span class="p">],</span></div><div class='line' id='LC378'><span class="p">[</span><span class="o">-</span><span class="mf">37.8187476667</span><span class="p">,</span> <span class="mf">175.2186516333</span><span class="p">,</span> <span class="s2">&quot;44&quot;</span><span class="p">],</span></div><div class='line' id='LC379'><span class="p">[</span><span class="o">-</span><span class="mf">37.8182977</span><span class="p">,</span> <span class="mf">175.21889655</span><span class="p">,</span> <span class="s2">&quot;45&quot;</span><span class="p">],</span></div><div class='line' id='LC380'><span class="p">[</span><span class="o">-</span><span class="mf">37.81831675</span><span class="p">,</span> <span class="mf">175.2194069833</span><span class="p">,</span> <span class="s2">&quot;41&quot;</span><span class="p">],</span></div><div class='line' id='LC381'><span class="p">[</span><span class="o">-</span><span class="mf">37.8192735167</span><span class="p">,</span> <span class="mf">175.2219502167</span><span class="p">,</span> <span class="s2">&quot;19&quot;</span><span class="p">],</span></div><div class='line' id='LC382'><span class="p">[</span><span class="o">-</span><span class="mf">37.8196219167</span><span class="p">,</span> <span class="mf">175.22189825</span><span class="p">,</span> <span class="s2">&quot;20&quot;</span><span class="p">],</span></div><div class='line' id='LC383'><span class="p">[</span><span class="o">-</span><span class="mf">37.81962665</span><span class="p">,</span> <span class="mf">175.2216432667</span><span class="p">,</span> <span class="s2">&quot;22A&quot;</span><span class="p">],</span></div><div class='line' id='LC384'><span class="p">[</span><span class="o">-</span><span class="mf">37.8192782833</span><span class="p">,</span> <span class="mf">175.2209942</span><span class="p">,</span> <span class="s2">&quot;28&quot;</span><span class="p">],</span></div><div class='line' id='LC385'><span class="p">[</span><span class="o">-</span><span class="mf">37.8208129833</span><span class="p">,</span> <span class="mf">175.2209176833</span><span class="p">,</span> <span class="s2">&quot;83A&quot;</span><span class="p">],</span></div><div class='line' id='LC386'><span class="p">[</span><span class="o">-</span><span class="mf">37.8206351167</span><span class="p">,</span> <span class="mf">175.2209705667</span><span class="p">,</span> <span class="s2">&quot;83&quot;</span><span class="p">],</span></div><div class='line' id='LC387'><span class="p">[</span><span class="o">-</span><span class="mf">37.8203109333</span><span class="p">,</span> <span class="mf">175.2212402667</span><span class="p">,</span> <span class="s2">&quot;84&quot;</span><span class="p">],</span></div><div class='line' id='LC388'><span class="p">[</span><span class="o">-</span><span class="mf">37.81909575</span><span class="p">,</span> <span class="mf">175.22139795</span><span class="p">,</span> <span class="s2">&quot;23&quot;</span><span class="p">],</span></div><div class='line' id='LC389'><span class="p">[</span><span class="o">-</span><span class="mf">37.8197787167</span><span class="p">,</span> <span class="mf">175.2228814</span><span class="p">,</span> <span class="s2">&quot;12&quot;</span><span class="p">],</span></div><div class='line' id='LC390'><span class="p">[</span><span class="o">-</span><span class="mf">37.8195628333</span><span class="p">,</span> <span class="mf">175.21791605</span><span class="p">,</span> <span class="s2">&quot;57A&quot;</span><span class="p">],</span></div><div class='line' id='LC391'><span class="p">[</span><span class="o">-</span><span class="mf">37.8198373833</span><span class="p">,</span> <span class="mf">175.2233606833</span><span class="p">,</span> <span class="s2">&quot;8&quot;</span><span class="p">],</span></div><div class='line' id='LC392'><span class="p">[</span><span class="o">-</span><span class="mf">37.8194342167</span><span class="p">,</span> <span class="mf">175.22322975</span><span class="p">,</span> <span class="s2">&quot;9&quot;</span><span class="p">]</span></div><div class='line' id='LC393'><span class="p">];</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/danzel/Leaflet.markercluster/tree-list/c0871d7cb7558b319fff1a0cfabda5d8d9b74199" data-blob-url-prefix="/danzel/Leaflet.markercluster/blob/c0871d7cb7558b319fff1a0cfabda5d8d9b74199">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.20777s from fe18.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1340659560" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1340659560" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton download">Download</a>
        </li>
      </ul>
    </div>

    
    
    <span id='server_response_time' data-time='0.21020' data-host='fe18'></span>
    
  </body>
</html>

