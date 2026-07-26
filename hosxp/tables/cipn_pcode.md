# `cipn_pcode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cipn_pcode | varchar(1) | NO | PRI |  |  |  |
| cipn_pcode_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cipn_pcode_name | cipn_pcode_name | yes | 1 |
| PRIMARY | cipn_pcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "cipn_pcode": "0",
    "cipn_pcode_name": "ภายในกำหนด"
  },
  {
    "cipn_pcode": "1",
    "cipn_pcode_name": "เกินกำหนด"
  },
  {
    "cipn_pcode": "2",
    "cipn_pcode_name": "เกินกำหนด 2 เดือน"
  }
]
```
