# `palliative_care_tool_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_tool_care_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_tool_care_other | varchar(255) | YES |  | NULL |  |  |
| palliative_care_tool_care_date | date | YES |  | NULL |  |  |
| palliative_care_tool_amount | int(11) | YES |  | NULL |  |  |
| palliative_care_tool_price | int(11) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| palliative_care_tool_icode | char(10) | YES |  | NULL |  |  |
| palliative_care_patient_register_id | int(11) | YES |  | NULL |  |  |
| palliative_care_home_visit_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_tool_care_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
