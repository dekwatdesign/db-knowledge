# `palliative_care_plan_support_equipment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_plan_support_equipment_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_plan_support_equipment_icode | char(7) | YES |  | NULL |  |  |
| palliative_care_plan_support_equipment_note | varchar(255) | YES |  | NULL |  |  |
| palliative_care_plan_support_equipment_qty | double(13,3) | YES |  | NULL |  |  |
| palliative_care_plan_support_equipment_date | date | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_plan_support_equipment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
