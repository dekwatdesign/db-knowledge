# `epidem_covid_tmlt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| epidem_covid_tmlt_code | varchar(50) | NO | PRI |  |  |  |
| epidem_covid_tmlt_code_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | epidem_covid_tmlt_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "epidem_covid_tmlt_code": "350501",
    "epidem_covid_tmlt_code_name": "SARS coronavirus 2 RNA [+/-] in Respiratory specimen by NAA with probe detection"
  },
  {
    "epidem_covid_tmlt_code": "350502",
    "epidem_covid_tmlt_code_name": "SARS coronavirus 2 N gene [+/-] in Respiratory specimen by NAA with probe detection"
  },
  {
    "epidem_covid_tmlt_code": "350503",
    "epidem_covid_tmlt_code_name": "SARS coronavirus 2 RdRp gene [+/-] in Respiratory specimen by NAA with probe detection"
  },
  {
    "epidem_covid_tmlt_code": "350506",
    "epidem_covid_tmlt_code_name": "SARS coronavirus 2 IgG Ab [+/-] in Serum or Plasma by Rapid immunoassay"
  },
  {
    "epidem_covid_tmlt_code": "350507",
    "epidem_covid_tmlt_code_name": "SARS coronavirus 2 IgM Ab [+/-] in Serum or Plasma by Rapid immunoassay"
  },
  {
    "epidem_covid_tmlt_code": "350508",
    "epidem_covid_tmlt_code_name": "SARS coronavirus 2 IgG+IgM Ab [+/-] in Serum or Plasma by Immunoassay"
  },
  {
    "epidem_covid_tmlt_code": "350509",
    "epidem_covid_tmlt_code_name": "SARS coronavirus 2 Ag [+/-] in Respiratory specimen by Rapid immunoassay"
  },
  {
    "epidem_covid_tmlt_code": "350926",
    "epidem_covid_tmlt_code_name": "SARS-CoV-2 (COVID-19) IgA Ab [+/-] in Serum or Plasma by Immunoassay"
  }
]
```
