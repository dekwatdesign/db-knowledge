# `cipn_tcode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cipn_tcode | varchar(1) | NO | PRI |  |  |  |
| cipn_tcode_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cipn_tcode_name | cipn_tcode_name | yes | 1 |
| PRIMARY | cipn_tcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "cipn_tcode": "A",
    "cipn_tcode_name": "ผ่าน"
  },
  {
    "cipn_tcode": "T",
    "cipn_tcode_name": "รอใบรับรองการมีสิทธิ"
  },
  {
    "cipn_tcode": "C",
    "cipn_tcode_name": "ต้องแก้ไข"
  }
]
```
