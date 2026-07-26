# `icd11_postcoord_value`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(10) | NO | PRI | NULL |  |  |
| axis_name | varchar(100) | NO | PRI | NULL |  |  |
| ordinal | int(11) | NO | PRI | NULL |  |  |
| value_entity_id | bigint(20) | YES |  | NULL |  |  |
| value_code | varchar(10) | YES |  | NULL |  |  |
| value_label | varchar(500) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_axis | axis_name | no | 1 |
| ix_axis | code | no | 2 |
| PRIMARY | axis_name | yes | 1 |
| PRIMARY | code | yes | 2 |
| PRIMARY | ordinal | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "LB74.4",
    "axis_name": "laterality",
    "ordinal": 0,
    "value_entity_id": 627678743,
    "value_code": "XK9J",
    "value_label": "Bilateral"
  },
  {
    "code": "LB74.4",
    "axis_name": "laterality",
    "ordinal": 1,
    "value_entity_id": 271422288,
    "value_code": "XK8G",
    "value_label": "Left"
  },
  {
    "code": "LB74.4",
    "axis_name": "laterality",
    "ordinal": 2,
    "value_entity_id": 876572005,
    "value_code": "XK9K",
    "value_label": "Right"
  },
  {
    "code": "LB74.4",
    "axis_name": "laterality",
    "ordinal": 3,
    "value_entity_id": 1038788978,
    "value_code": "XK70",
    "value_label": "Unilateral, unspecified"
  },
  {
    "code": "NC56.4",
    "axis_name": "laterality",
    "ordinal": 0,
    "value_entity_id": 627678743,
    "value_code": "XK9J",
    "value_label": "Bilateral"
  },
  {
    "code": "NC56.4",
    "axis_name": "laterality",
    "ordinal": 1,
    "value_entity_id": 271422288,
    "value_code": "XK8G",
    "value_label": "Left"
  },
  {
    "code": "NC56.4",
    "axis_name": "laterality",
    "ordinal": 2,
    "value_entity_id": 876572005,
    "value_code": "XK9K",
    "value_label": "Right"
  },
  {
    "code": "NC56.4",
    "axis_name": "laterality",
    "ordinal": 3,
    "value_entity_id": 1038788978,
    "value_code": "XK70",
    "value_label": "Unilateral, unspecified"
  }
]
```
