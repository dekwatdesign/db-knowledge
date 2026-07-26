# `ipt_vital_chart_print`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_vital_chart_print_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| chart_png_image | longblob | YES |  | NULL |  |  |
| page_no | int(11) | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| finish_date | date | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | ipt_vital_chart_print_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "ipt_vital_chart_print_id": 1,
    "an": "680001984",
    "chart_png_image": "[MASKED_AVATAR]",
    "page_no": 1,
    "start_date": "2025-12-25",
    "finish_date": "2025-12-31",
    "update_datetime": "2025-12-29 20:11:35"
  }
]
```
