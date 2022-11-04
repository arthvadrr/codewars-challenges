<?php
/*
https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function validate($c): int
{
  if ($c > 255) $c = 255;
  if ($c <= 0) $c = 0;
  return $c;
}

function get_hex_val($c): string
{
  $key = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  $num = number_format($c / 16, 2, '.', '');
  $str = strval($num);
  $pad = str_pad($str, 2, '0');
  $spl = explode('.', $pad);
  $v1 = $spl[0];
  $v2 = round($spl[1] * .16);
  return $key[$v1] . $key[$v2];
}

function rgb($r, $g, $b): string
{
  $hex = [$r, $g, $b];
  foreach ($hex as &$num) $num = validate($num);

  $map = join(
    "",
    array_map(
      fn ($c): string => get_hex_val($c),
      $hex
    )
  );

  return $map;
}
print_r(rgb(255, 255, 123));
