# `patient_dent_diagram_zoom`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| zoom_percent | double(15,2) | YES |  | NULL |  |  |
| scroll_x | int(11) | YES |  | NULL |  |  |
| scroll_y | int(11) | YES |  | NULL |  |  |
| noshow_milk_tooth | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "hn": "530121754",
    "zoom_percent": 100.0,
    "scroll_x": -1,
    "scroll_y": 0,
    "noshow_milk_tooth": null
  }
]
```
