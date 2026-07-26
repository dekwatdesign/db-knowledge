# `bsc_perspective`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bsc_perspective_id | int(11) | NO | PRI | 0 |  |  |
| bsc_perspective_name | varchar(200) | YES | UNI | NULL |  |  |
| bsc_perspective_desc_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bsc_perspective_name | bsc_perspective_name | yes | 1 |
| PRIMARY | bsc_perspective_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "bsc_perspective_id": 1,
    "bsc_perspective_name": "ด้านการเงิน",
    "bsc_perspective_desc_text": "\r\n\r\n"
  },
  {
    "bsc_perspective_id": 2,
    "bsc_perspective_name": "ด้านลูกค้า",
    "bsc_perspective_desc_text": null
  },
  {
    "bsc_perspective_id": 3,
    "bsc_perspective_name": "ด้านกระบวนการภายใจ",
    "bsc_perspective_desc_text": null
  },
  {
    "bsc_perspective_id": 4,
    "bsc_perspective_name": "ด้านการเรียนรู้และพัฒนา",
    "bsc_perspective_desc_text": null
  }
]
```
