# `hosxp_ddl_index`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| table_name | varchar(150) | NO | PRI |  |  |  |
| index_name | varchar(150) | NO | PRI |  |  |  |
| field_number | int(11) | YES |  | NULL |  |  |
| field_name | varchar(150) | NO | PRI |  |  |  |
| index_unique | char(1) | YES |  | NULL |  |  |
| index_seq | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| index_name | index_name | no | 1 |
| ix_ti | table_name | no | 1 |
| ix_ti | index_name | no | 2 |
| PRIMARY | table_name | yes | 1 |
| PRIMARY | index_name | yes | 2 |
| PRIMARY | field_name | yes | 3 |
| table_name | table_name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "table_name": "acc_bank_type",
    "index_name": "PRIMARY",
    "field_number": null,
    "field_name": "acc_bank_type_id",
    "index_unique": "Y",
    "index_seq": null
  },
  {
    "table_name": "acc_bank_type",
    "index_name": "acc_bank_type_name",
    "field_number": null,
    "field_name": "acc_bank_type_name",
    "index_unique": "Y",
    "index_seq": null
  },
  {
    "table_name": "access_menu",
    "index_name": "PRIMARY",
    "field_number": null,
    "field_name": "name",
    "index_unique": "Y",
    "index_seq": null
  },
  {
    "table_name": "access_menu",
    "index_name": "ix_hos_guid",
    "field_number": null,
    "field_name": "hos_guid",
    "index_unique": "N",
    "index_seq": null
  },
  {
    "table_name": "access_menu",
    "index_name": "ix_hos_guid_ext",
    "field_number": null,
    "field_name": "hos_guid_ext",
    "index_unique": "N",
    "index_seq": null
  },
  {
    "table_name": "accessoperation",
    "index_name": "PRIMARY",
    "field_number": null,
    "field_name": "accessname",
    "index_unique": "Y",
    "index_seq": null
  },
  {
    "table_name": "accessoperation",
    "index_name": "ix_rightname",
    "field_number": null,
    "field_name": "rightname",
    "index_unique": "N",
    "index_seq": null
  },
  {
    "table_name": "accessoperation",
    "index_name": "ix_hos_guid",
    "field_number": null,
    "field_name": "hos_guid",
    "index_unique": "N",
    "index_seq": null
  }
]
```
