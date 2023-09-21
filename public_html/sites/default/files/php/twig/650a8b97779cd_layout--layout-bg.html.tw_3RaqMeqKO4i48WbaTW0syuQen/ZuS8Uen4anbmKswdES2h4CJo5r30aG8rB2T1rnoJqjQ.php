<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/layout_bg/templates/layout--layout-bg.html.twig */
class __TwigTemplate_5bca694b8d6c8170e4af2c341c3cf8ef extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 14
        if (($context["content"] ?? null)) {
            // line 15
            echo "  ";
            if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "background", [], "any", false, false, true, 15), "layout_builder_add_block", [], "any", false, false, true, 15)) {
                // line 16
                echo "    ";
                // line 17
                echo "    <div class=\"layout-bg-edit\">
      <div>
        <h3>";
                // line 19
                echo t("Background", array());
                echo "</h3>
        <p>";
                // line 20
                echo t("You may add as many background blocks as you like. Please choose blocks that render an image or video tag. The first block that is not empty will be used. If that block does not render an image or video tag, this Layout will probably not work well.", array());
                echo "</p>
      </div>
      <div class=\"layout-bg-preview\" style=\"background-color: white;\">
        <div style=\"";
                // line 23
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "background", [], "any", false, false, true, 23), "style", [], "any", false, false, true, 23), 23, $this->source), "html", null, true);
                echo "\">
          ";
                // line 24
                if (twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "overlay_attributes", [], "any", false, false, true, 24)) {
                    // line 25
                    echo "            <div";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "overlay_attributes", [], "any", false, false, true, 25), "addClass", [0 => "layout-bg-overlay"], "method", false, false, true, 25), 25, $this->source), "html", null, true);
                    echo "></div>
          ";
                }
                // line 27
                echo "          <h3";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "content_attributes", [], "any", false, false, true, 27), "addClass", [0 => "layout-bg-preview-text"], "method", false, false, true, 27), 27, $this->source), "html", null, true);
                echo ">";
                echo t("Color preview if image does not load.", array());
                echo "</h3>
        </div>
      </div>
      <div";
                // line 30
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["base_layout_template"] ?? null), 30, $this->source))], "method", false, false, true, 30), 30, $this->source), "html", null, true);
                echo ">
        <div";
                // line 31
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "background", [], "any", false, false, true, 31), "addClass", [0 => "layout__region"], "method", false, false, true, 31), 31, $this->source), "html", null, true);
                echo ">
          ";
                // line 32
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "background", [], "any", false, false, true, 32), 32, $this->source), "html", null, true);
                echo "
        </div>
      </div>
      <div>
        <h3>";
                // line 36
                echo t("Content", array());
                echo "</h3>
      </div>
      ";
                // line 38
                $this->loadTemplate(($context["base_layout_template"] ?? null), "modules/contrib/layout_bg/templates/layout--layout-bg.html.twig", 38)->display($context);
                // line 39
                echo "    </div>
  ";
            } else {
                // line 41
                echo "    ";
                // line 42
                echo "    <div class=\"layout-bg-section\">
      <div class=\"layout-bg-row\">
        <div class=\"layout-bg-bg-container\">
          <div";
                // line 45
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "background", [], "any", false, false, true, 45), "addClass", [0 => "layout-bg-bg-wrapper"], "method", false, false, true, 45), 45, $this->source), "html", null, true);
                echo ">
            ";
                // line 46
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "processed_background", [], "any", false, false, true, 46), 46, $this->source), "html", null, true);
                echo "
          </div>
          ";
                // line 48
                if (twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "overlay_attributes", [], "any", false, false, true, 48)) {
                    // line 49
                    echo "            <div";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "overlay_attributes", [], "any", false, false, true, 49), "addClass", [0 => "layout-bg-overlay"], "method", false, false, true, 49), 49, $this->source), "html", null, true);
                    echo "></div>
          ";
                }
                // line 51
                echo "        </div>
        <div ";
                // line 52
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "content_attributes", [], "any", false, false, true, 52), "addClass", [0 => "layout-bg-content-container"], "method", false, false, true, 52), 52, $this->source), "html", null, true);
                echo ">
          ";
                // line 53
                $this->loadTemplate(($context["base_layout_template"] ?? null), "modules/contrib/layout_bg/templates/layout--layout-bg.html.twig", 53)->display($context);
                // line 54
                echo "        </div>
      </div>
    </div>
  ";
            }
        }
    }

    public function getTemplateName()
    {
        return "modules/contrib/layout_bg/templates/layout--layout-bg.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  140 => 54,  138 => 53,  134 => 52,  131 => 51,  125 => 49,  123 => 48,  118 => 46,  114 => 45,  109 => 42,  107 => 41,  103 => 39,  101 => 38,  96 => 36,  89 => 32,  85 => 31,  81 => 30,  72 => 27,  66 => 25,  64 => 24,  60 => 23,  54 => 20,  50 => 19,  46 => 17,  44 => 16,  41 => 15,  39 => 14,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/layout_bg/templates/layout--layout-bg.html.twig", "/app/public_html/modules/contrib/layout_bg/templates/layout--layout-bg.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 14, "trans" => 19, "include" => 38);
        static $filters = array("escape" => 23, "clean_class" => 30);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'trans', 'include'],
                ['escape', 'clean_class'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
