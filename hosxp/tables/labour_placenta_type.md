# `labour_placenta_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| placenta_type_id | int(11) | NO | PRI | 0 |  |  |
| placenta_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_placenta_type_name | placenta_type_name | yes | 1 |
| PRIMARY | placenta_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "placenta_type_id": 1,
    "placenta_type_name": "Modified  Crede  Maneuver",
    "hos_guid": "{1BA374C3-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "placenta_type_id": 2,
    "placenta_type_name": "Braunt  Andrew  Maneuver",
    "hos_guid": "{1BA37BC2-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "placenta_type_id": 3,
    "placenta_type_name": "Manual  Removal  Placenta  at  LR",
    "hos_guid": "{1BA380BB-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "placenta_type_id": 4,
    "placenta_type_name": "Manual  Removal  placenta at OR",
    "hos_guid": "{1BA38590-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "placenta_type_id": 6,
    "placenta_type_name": "Centrel Cord Traction",
    "hos_guid": "{1BA38A41-E5DA-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
