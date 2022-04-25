# Drupal Material You

A Drupal theme based on Material You, i.e. Material Design 3. 

The theme is **not** developed or supported by Google in any way. The theme is under development. 

## Implementable Hooks

Menu items are extended, using an icon (Material Icons). You can set icons of your modules by *hook_preprocess_menu()*
```php
/**
 * Implements hook_preprocess_hook()
 */
function yourmodule_preprocess_menu(&$variables): void
{
  foreach($variables['items'] as $index => $item) {
    if ($item['url']->getRouteName() === 'your.route.name') {
      $variables['items'][$index]['icon'] = 'icon_name';
    }
  }
}
```

## How to create Material Elements through Javascript or custom PHP

# Button 
```html
<div class="materialyou-button materialyou-flat-button materialyou-icon-button">
  <span class="material-icons">refresh</span>
  <p class="badge">969</p>
</div> 
```

# Card 
```html
<div class="materialyou-card materialyou-card-filled">
  <h3 class="materialyou-card-title">Title</h3>
  <p class="materialyou-card-subtitle">Subtitle</p>
</div>
```