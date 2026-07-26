# `tb_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_type_id | int(11) | NO | PRI | 0 |  |  |
| tb_type_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "tb_type_id": 1,
    "tb_type_name": "วัณโรคในปอด",
    "hos_guid": null
  },
  {
    "tb_type_id": 2,
    "tb_type_name": "วัณโรคนอกปอด",
    "hos_guid": null
  }
]
```
