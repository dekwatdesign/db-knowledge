# `hosxp_ddl_field`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| table_name | varchar(150) | NO | PRI |  |  |  |
| field_name | varchar(150) | NO | PRI |  |  |  |
| field_type_mysql | varchar(100) | YES |  | NULL |  |  |
| field_type_postgresql | varchar(100) | YES |  | NULL |  |  |
| field_type_mssql | varchar(100) | YES |  | NULL |  |  |
| field_type_interbase | varchar(100) | YES |  | NULL |  |  |
| field_width | int(11) | YES |  | NULL |  |  |
| field_null | varchar(10) | YES |  | NULL |  |  |
| field_number | int(11) | YES |  | NULL |  |  |
| field_primary | char(1) | YES |  | NULL |  |  |
| field_type_oracle | varchar(150) | YES |  | NULL |  |  |
| field_type_native | varchar(100) | YES |  | NULL |  |  |
| field_precision | int(11) | YES |  | NULL |  |  |
| field_precision_text | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| field_name | field_name | no | 1 |
| PRIMARY | table_name | yes | 1 |
| PRIMARY | field_name | yes | 2 |
| table_name | table_name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "table_name": "acc_bank_type",
    "field_name": "acc_bank_type_id",
    "field_type_mysql": "int",
    "field_type_postgresql": "integer",
    "field_type_mssql": null,
    "field_type_interbase": null,
    "field_width": 11,
    "field_null": "NO",
    "field_number": 1,
    "field_primary": null,
    "field_type_oracle": "number",
    "field_type_native": null,
    "field_precision": 9,
    "field_precision_text": "9,0"
  },
  {
    "table_name": "acc_bank_type",
    "field_name": "acc_bank_type_name",
    "field_type_mysql": "varchar",
    "field_type_postgresql": "varchar",
    "field_type_mssql": null,
    "field_type_interbase": null,
    "field_width": 200,
    "field_null": "NO",
    "field_number": 2,
    "field_primary": null,
    "field_type_oracle": "nvarchar2",
    "field_type_native": null,
    "field_precision": null,
    "field_precision_text": null
  },
  {
    "table_name": "acc_bank_type",
    "field_name": "acc_bank_code",
    "field_type_mysql": "varchar",
    "field_type_postgresql": "varchar",
    "field_type_mssql": null,
    "field_type_interbase": null,
    "field_width": 20,
    "field_null": "YES",
    "field_number": 3,
    "field_primary": null,
    "field_type_oracle": "nvarchar2",
    "field_type_native": null,
    "field_precision": null,
    "field_precision_text": null
  },
  {
    "table_name": "access_menu",
    "field_name": "name",
    "field_type_mysql": "varchar",
    "field_type_postgresql": "varchar",
    "field_type_mssql": null,
    "field_type_interbase": null,
    "field_width": 250,
    "field_null": "NO",
    "field_number": 1,
    "field_primary": null,
    "field_type_oracle": "nvarchar2",
    "field_type_native": null,
    "field_precision": null,
    "field_precision_text": null
  },
  {
    "table_name": "access_menu",
    "field_name": "caption",
    "field_type_mysql": "varchar",
    "field_type_postgresql": "varchar",
    "field_type_mssql": null,
    "field_type_interbase": null,
    "field_width": 250,
    "field_null": "YES",
    "field_number": 2,
    "field_primary": null,
    "field_type_oracle": "nvarchar2",
    "field_type_native": null,
    "field_precision": null,
    "field_precision_text": null
  },
  {
    "table_name": "access_menu",
    "field_name": "menutype",
    "field_type_mysql": "tinyint",
    "field_type_postgresql": "integer",
    "field_type_mssql": null,
    "field_type_interbase": null,
    "field_width": 4,
    "field_null": "YES",
    "field_number": 3,
    "field_primary": null,
    "field_type_oracle": "number",
    "field_type_native": null,
    "field_precision": 9,
    "field_precision_text": "9,0"
  },
  {
    "table_name": "access_menu",
    "field_name": "module_name",
    "field_type_mysql": "varchar",
    "field_type_postgresql": "varchar",
    "field_type_mssql": null,
    "field_type_interbase": null,
    "field_width": 25,
    "field_null": "YES",
    "field_number": 4,
    "field_primary": null,
    "field_type_oracle": "nvarchar2",
    "field_type_native": null,
    "field_precision": null,
    "field_precision_text": null
  },
  {
    "table_name": "access_menu",
    "field_name": "description",
    "field_type_mysql": "varchar",
    "field_type_postgresql": "varchar",
    "field_type_mssql": null,
    "field_type_interbase": null,
    "field_width": 250,
    "field_null": "YES",
    "field_number": 5,
    "field_primary": null,
    "field_type_oracle": "nvarchar2",
    "field_type_native": null,
    "field_precision": null,
    "field_precision_text": null
  }
]
```
