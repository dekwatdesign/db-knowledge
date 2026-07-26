# `reporttemplate_parameter_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reporttemplate_parameter_type_id | int(11) | NO | PRI | 0 |  |  |
| reporttemplate_parameter_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_reporttemplate_parameter_type_name | reporttemplate_parameter_type_name | yes | 1 |
| PRIMARY | reporttemplate_parameter_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "reporttemplate_parameter_type_id": 1,
    "reporttemplate_parameter_type_name": "String",
    "hos_guid": null
  },
  {
    "reporttemplate_parameter_type_id": 2,
    "reporttemplate_parameter_type_name": "Number",
    "hos_guid": null
  },
  {
    "reporttemplate_parameter_type_id": 3,
    "reporttemplate_parameter_type_name": "Date",
    "hos_guid": null
  },
  {
    "reporttemplate_parameter_type_id": 4,
    "reporttemplate_parameter_type_name": "Time",
    "hos_guid": null
  },
  {
    "reporttemplate_parameter_type_id": 5,
    "reporttemplate_parameter_type_name": "DateTime",
    "hos_guid": null
  }
]
```
