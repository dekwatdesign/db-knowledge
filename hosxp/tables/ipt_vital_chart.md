# `ipt_vital_chart`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_vital_chart_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| chart_png_image | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | ipt_vital_chart_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_vital_chart_id": 1,
    "an": "680001098",
    "chart_png_image": "[MASKED_AVATAR]"
  },
  {
    "ipt_vital_chart_id": 2,
    "an": "680001104",
    "chart_png_image": "[MASKED_AVATAR]"
  },
  {
    "ipt_vital_chart_id": 3,
    "an": "680001193",
    "chart_png_image": "[MASKED_AVATAR]"
  },
  {
    "ipt_vital_chart_id": 4,
    "an": "680001149",
    "chart_png_image": "[MASKED_AVATAR]"
  },
  {
    "ipt_vital_chart_id": 5,
    "an": "680001207",
    "chart_png_image": "[MASKED_AVATAR]"
  },
  {
    "ipt_vital_chart_id": 6,
    "an": "680001239",
    "chart_png_image": "[MASKED_AVATAR]"
  },
  {
    "ipt_vital_chart_id": 7,
    "an": "680001208",
    "chart_png_image": "[MASKED_AVATAR]"
  },
  {
    "ipt_vital_chart_id": 8,
    "an": "680001245",
    "chart_png_image": "[MASKED_AVATAR]"
  }
]
```
