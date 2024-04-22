import { mapProjectFromApiToVm } from './project.mapper';

describe('./pods/project/project.mapper.spec.ts', () => {
  it('should map Project from API to ViewModel', () => {
    // Assert
    const apiResponse = {
      id: '123',
      name: 'Awesome Project',
      externalId: 'ext-123',
      comments: 'This project is amazing!',
      isActive: true,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Jhon Doe',
        },
      ],
    };

    const expectedVm = {
      id: '123',
      name: 'Awesome Project',
      externalId: 'ext-123',
      comments: 'This project is amazing!',
      isActive: true,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Jhon Doe',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(apiResponse);

    // Assert
    expect(result).toEqual(expectedVm);
  });
});
