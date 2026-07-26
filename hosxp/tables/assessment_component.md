# `assessment_component`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| assessment_component_id | int(11) | NO | PRI | 0 |  |  |
| assessment_component_name | varchar(100) | YES |  | NULL |  |  |
| assessment_classname | varchar(100) | YES |  | NULL |  |  |
| assessment_data_type | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | assessment_component_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "assessment_component_id": 1,
    "assessment_component_name": "TextEdit",
    "assessment_classname": "TcxTextEdit",
    "assessment_data_type": "VARCHAR(250)"
  },
  {
    "assessment_component_id": 2,
    "assessment_component_name": "Memo",
    "assessment_classname": "TcxMemo",
    "assessment_data_type": "VARCHAR(500)"
  },
  {
    "assessment_component_id": 3,
    "assessment_component_name": "ComboBox",
    "assessment_classname": "TcxComboBox",
    "assessment_data_type": "VARCHAR(100)"
  },
  {
    "assessment_component_id": 4,
    "assessment_component_name": "RadioGroup",
    "assessment_classname": "TRadioGroup",
    "assessment_data_type": "CHAR(1)"
  },
  {
    "assessment_component_id": 5,
    "assessment_component_name": "CheckBox",
    "assessment_classname": "TcxCheckBox",
    "assessment_data_type": "VARCHAR(100)"
  },
  {
    "assessment_component_id": 6,
    "assessment_component_name": "DateEdit",
    "assessment_classname": "TcxDateEdit",
    "assessment_data_type": "date"
  },
  {
    "assessment_component_id": 7,
    "assessment_component_name": "TimeEdit",
    "assessment_classname": "TRadioGroup",
    "assessment_data_type": "time"
  },
  {
    "assessment_component_id": 8,
    "assessment_component_name": "Currency",
    "assessment_classname": "TcxCurrencyEdit",
    "assessment_data_type": "float8"
  }
]
```
