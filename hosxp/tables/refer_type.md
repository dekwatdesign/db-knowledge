# `refer_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_type | int(11) | NO | PRI | 0 |  |  |
| refer_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_refer_type_name | refer_type_name | yes | 1 |
| PRIMARY | refer_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "refer_type": 0,
    "refer_type_name": "รับส่งจาก CUPs",
    "hos_guid": null
  },
  {
    "refer_type": 1,
    "refer_type_name": "รับส่งภายในจังหวัด",
    "hos_guid": null
  },
  {
    "refer_type": 2,
    "refer_type_name": "รับส่งนอกจังหวัด",
    "hos_guid": null
  }
]
```
