# `pulse_regulation_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pulse_regulation_type_id | int(11) | NO | PRI | 0 |  |  |
| pulse_regulation_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_pulse_regulation_type_name | pulse_regulation_type_name | yes | 1 |
| PRIMARY | pulse_regulation_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "pulse_regulation_type_id": 1,
    "pulse_regulation_type_name": "สม่ำเสมอ",
    "hos_guid": null
  },
  {
    "pulse_regulation_type_id": 2,
    "pulse_regulation_type_name": "ไม่สม่ำเสมอ",
    "hos_guid": null
  }
]
```
