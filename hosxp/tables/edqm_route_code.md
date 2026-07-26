# `edqm_route_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edqm_route_code | varchar(15) | NO | PRI |  |  |  |
| edqm_route_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_edqm_route_name | edqm_route_name | yes | 1 |
| PRIMARY | edqm_route_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "edqm_route_code": "10100500",
    "edqm_route_name": "Concentrate for oral suspension"
  },
  {
    "edqm_route_code": "10101000",
    "edqm_route_name": "Oral drops, solution"
  },
  {
    "edqm_route_code": "10102000",
    "edqm_route_name": "Oral drops, suspension"
  },
  {
    "edqm_route_code": "10103000",
    "edqm_route_name": "Oral drops, emulsion"
  },
  {
    "edqm_route_code": "10104000",
    "edqm_route_name": "Oral liquid"
  },
  {
    "edqm_route_code": "10105000",
    "edqm_route_name": "Oral solution"
  },
  {
    "edqm_route_code": "10106000",
    "edqm_route_name": "Oral suspension"
  },
  {
    "edqm_route_code": "10107000",
    "edqm_route_name": "Oral emulsion"
  }
]
```
