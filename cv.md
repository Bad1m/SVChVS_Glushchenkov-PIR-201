<img style="border-style: none; max-height: 9em; border-radius: 50%; margin-right: 2em;" id="photo" src="./photo.jpg" alt="profile picture" />

![Photo](/picture/ava.jpg)

# SVChVS_Glushchenkov-PIR-201

1. # Glushchenkov Vadim;

1. # Contacts for communication:

- Cell:+375445532924
- Email: vadim600000@gmail.com;

1. # Brief information about yourself:
   I am studying in the 3rd year at BRU as a software engineer. I want to learn new programming languages, frameworks, methodologies, development tools. I'm an enthusiastic, responsible and hard working IT person.;
1. # Skills:

- C#
- MSSQL
- HTML
- CSS
- JAVA

1. **Project experience cv:** [github.com]https://github.com/Bad1m/SVChVS_Glushchenkov-PIR-201.git;

1. **English language level:** intermediate;

1. # Code

```C#
namespace BusSchedule.WEB.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TransportController : ControllerBase
    {
        private readonly TransportContext context;

        public TransportController(TransportContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Transport>> Get()
        {
            var Transports = await context.Transports.ToListAsync();

            return Transports;
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] CreateTransportRequest value)
        {
            var Transport = new Transport
            {
                TransportId = value.TransportId,
                TypeOfTransport = value.TypeOfTransport,
                Capacity = value.Capacity,
                NumberOfPassengerSeats = value.NumberOfPassengerSeats,
    };

            await context.Transports.AddAsync(Transport);
            await context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete([FromRoute] int id)
        {
            var result = await context.Transports
                .FirstOrDefaultAsync(e => e.TransportId == id);
            if (result != null)
            {
                context.Transports.Remove(result);
                await context.SaveChangesAsync();
            }

            return null;
        }
    }
}
```
