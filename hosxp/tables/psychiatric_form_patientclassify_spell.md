# `psychiatric_form_patientclassify_spell`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_patientclassify_spell_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_form_patientclassify_spell_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_patientclassify_spell_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psychiatric_form_patientclassify_spell_id": 1,
    "psychiatric_form_patientclassify_spell_name": "เวรเช้า",
    "hos_guid": "2"
  },
  {
    "psychiatric_form_patientclassify_spell_id": 2,
    "psychiatric_form_patientclassify_spell_name": "เวรบ่าย",
    "hos_guid": "3"
  },
  {
    "psychiatric_form_patientclassify_spell_id": 3,
    "psychiatric_form_patientclassify_spell_name": "เวรดึก",
    "hos_guid": "1"
  }
]
```
