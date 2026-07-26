# `provis_referin`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(1) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "code": "0",
    "name": "พบที่ ศสช (ตรวจรักษาเอง)",
    "hos_guid": null
  },
  {
    "code": "1",
    "name": "รับไว้รักษาต่อ",
    "hos_guid": null
  }
]
```
