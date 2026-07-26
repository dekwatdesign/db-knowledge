# `hl7_severity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hl7_severity_id | varchar(18) | NO | PRI |  |  |  |
| hl7_severity_name | varchar(200) | YES | UNI | NULL |  |  |
| order_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hl7_severity_name | hl7_severity_name | yes | 1 |
| PRIMARY | hl7_severity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "hl7_severity_id": "399166001",
    "hl7_severity_name": "Fatal",
    "order_id": 7
  },
  {
    "hl7_severity_id": "442452003",
    "hl7_severity_name": "Life threatening severity",
    "order_id": 6
  },
  {
    "hl7_severity_id": "255604002",
    "hl7_severity_name": "Mild",
    "order_id": 1
  },
  {
    "hl7_severity_id": "371923003",
    "hl7_severity_name": "Mild to moderate",
    "order_id": 2
  },
  {
    "hl7_severity_id": "6736007",
    "hl7_severity_name": "Moderate",
    "order_id": 3
  },
  {
    "hl7_severity_id": "371924009",
    "hl7_severity_name": "Moderate to severe",
    "order_id": 4
  },
  {
    "hl7_severity_id": "24484000",
    "hl7_severity_name": "Severe",
    "order_id": 5
  }
]
```
